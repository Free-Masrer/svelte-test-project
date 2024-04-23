<script lang="ts">
  import type {
    Message,
    RetryFunction,
    DeleteFunction,
    MessageOrigin,
  } from "../types/message.js";
  import MessageStatus from "./MessageStatus.svelte";
  import MessageRetryAndDelete from "./MessageRetryAndDelete.svelte";
  import MessageAvatar from "./MessageAvatar.svelte";

  export let message: Message;
  export let hideAvatar: boolean = false;

  export let onRetry: RetryFunction;
  export let onDelete: DeleteFunction;

  function resolveSender(type: MessageOrigin): string {
    switch (type) {
      case "Assistant":
        return "Assistant";
      case "User":
        return "You";
      default:
        return "Unknown";
    }
  }

  $: messageText =
    message.status === "loading"
      ? "message loading"
      : message.status === "error"
        ? "message error"
        : "message";

  $: senderClass = message.type === "Assistant" ? "assistant" : "user";
  $: errorClass = message.status === "error" ? "error" : "";
</script>

<div class="message-box">
  {#if !hideAvatar}
    <div class="hide-on-mobile">
      <MessageAvatar {message} />
    </div>
  {/if}
  <div class={`content ${hideAvatar && "without-avatar"}`}>
    <div class="text-box">
      <div class="title">
        <span>{resolveSender(message.type)}</span>
        <MessageStatus {message} />
      </div>
      <span class={messageText}>{message.text}</span>
      {#if message.status === "error"}
        <MessageRetryAndDelete {onRetry} {onDelete} />
      {/if}
    </div>
  </div>
</div>

<div class={`message-mobile-box ${senderClass} ${errorClass}`}>
  <div class={`mobile-content ${senderClass} ${errorClass}`}>
    <span class={messageText}>{message.text}</span>
    <MessageStatus {message} />
  </div>
  {#if message.status === "error"}
    <MessageRetryAndDelete {onRetry} {onDelete} />
  {/if}
</div>

<style>
  .message-box {
    display: flex;
    visibility: visible;
    gap: 12px;
  }
  .message-mobile-box {
    display: none;
    visibility: hidden;
  }
  .content {
    display: grid;
    grid-auto-rows: min-content;
    width: 100%;
    gap: 4px;
    &.without-avatar {
      margin-inline-start: 44px;
    }
  }
  .text-box {
    display: flex;
    flex-direction: column;
    visibility: visible;
  }
  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .title span {
    font-weight: 600;
    font-size: 15px;
  }
  .message {
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    width: 95%;
  }
  .message.loading,
  .message.error {
    color: #797a75;
  }
  @media screen and (max-width: 600px) {
    .message-box {
      display: none;
      visibility: hidden;
    }
    .hide-on-mobile {
      display: none;
      visibility: hidden;
    }
    .message-mobile-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      visibility: visible;
      gap: 15px;
    }
    .message-mobile-box.error {
      justify-content: end;
    }
    .message-mobile-box.assistant {
      justify-content: end;
    }
    .mobile-content {
      display: flex;
      min-width: 80px;
      max-width: 345px;
      padding: 10px 15px 20px 15px;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      align-self: stretch;
      position: relative;
    }
    .mobile-content span {
      align-self: stretch;
      color: #000;
      /* Body-1/regular */
      font-family: Figtree;
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
    .mobile-content.assistant {
      border-radius: 20px 20px 4px 20px;
      background: linear-gradient(45deg, #473fff 0%, #9a59ff 100%);
    }

    .mobile-content.user {
      border-radius: 20px 20px 20px 4px;
      background: #f6f7f4;
    }

    .mobile-content.error {
      border-radius: 20px 20px 4px 20px;
      background: #d0021b;
    }
    .mobile-content.error span {
      color: #fff;
    }
    .mobile-content.assistant span {
      color: #fff;
    }
  }
</style>
