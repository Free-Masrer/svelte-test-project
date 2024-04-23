<script lang="ts">
  import type { Message } from "../types/message.js";
  import IconSatusSuccess from "./IconLibrary/IconSatusSuccess.svelte";
  import IconStatusError from "./IconLibrary/IconStatusError.svelte";
  import IconStatusLoading from "./IconLibrary/IconStatusLoading.svelte";

  export let message: Message;

  function formatTime(timestamp: string) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

  $: senderClass = message.type === "Assistant" ? "assistant" : "user";
  $: errorClass = message.status === "error" ? "error" : "";
</script>

<div class="hide-on-mobile">
  <div class="status">
    {#if message.type === "User"}
      {#if message.status === "success"}
        <IconSatusSuccess />
      {:else if message.status === "error"}
        <IconStatusError />
      {:else if message.status === "loading"}
        <IconStatusLoading />
      {/if}
    {/if}
    <span>{formatTime(message.timestamp)}</span>
  </div>
</div>
<div class="hide-on-desktop">
  <div class={`status ${senderClass} ${errorClass}`}>
    <span>{formatTime(message.timestamp)}</span>
    {#if message.type === "User"}
      {#if message.status === "success"}
        <IconSatusSuccess />
      {:else if message.status === "error"}
        <IconStatusError />
      {:else if message.status === "loading"}
        <IconStatusLoading />
      {/if}
    {/if}
  </div>
</div>

<style>
  .hide-on-mobile {
    display: flex;
    visibility: visible;
  }
  .hide-on-desktop {
    display: none;
    visibility: hidden;
  }
  .status {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
  }
  .status span {
    display: inline;
    color: #a6a7a4;
    text-align: right;
    font-family: "Figtree";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
  }
  @media screen and (max-width: 600px) {
    .hide-on-mobile {
      display: none;
      visibility: hidden;
    }
    .hide-on-desktop {
      display: flex;
      visibility: visible;
    }
    .status {
      position: absolute;
      right: 7px;

      bottom: 7px;
    }
    .status.user span {
      color: #a6a7a4;
    }
    .status.error span {
      color: #ffdde4;
    }
    .status.assistant span {
      color: #c8cbff;
    }
  }
</style>
