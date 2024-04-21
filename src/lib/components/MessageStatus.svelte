<script lang="ts">
  import type { Message } from "../types/message";
  import IconSatusSuccess from "./IconLibrary/IconSatusSuccess.svelte";
  import IconStatusError from "./IconLibrary/IconStatusError.svelte";
  import IconStatusLoading from "./IconLibrary/IconStatusLoading.svelte";

  export let message: Message;

  function formatTime(timestamp: Date) {
    return timestamp.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }
</script>

<div class="status">
  {#if message.status === "success"}
    <IconSatusSuccess />
  {:else if message.status === "error"}
    <IconStatusError />
  {:else if message.status === "loading"}
    <IconStatusLoading />
  {/if}
  <span>{formatTime(message.timestamp)}</span>
</div>

<style>
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
</style>
