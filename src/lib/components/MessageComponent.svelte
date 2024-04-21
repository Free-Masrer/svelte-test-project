<script lang="ts">
  import type {
    Message,
    RetryFunction,
    DeleteFunction,
    MessageOrigin,
  } from "../types/message";
  import MessageStatus from "./MessageStatus.svelte";
  import MessageRetryAndDelete from "./MessageRetryAndDelete.svelte";
  import MessageAvatar from "./MessageAvatar.svelte";

  export let message: Message;

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
</script>

<div class="message-box">
  <MessageAvatar {message} />
  <div class="content">
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

<style>
  .message-box {
    display: flex;
    width: 474px;
    align-items: flex-start;
    gap: 12px;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 4px;
  }
  .text-box {
    display: flex;
    flex-direction: column;
    width: 100%;
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
    font-family: Figtree;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  .message.loading,
  .message.error {
    color: #797a75;
  }
</style>
