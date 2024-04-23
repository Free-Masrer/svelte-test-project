<script lang="ts">
  import MessageComponent from "./MessageComponent.svelte";
  import TypingIndicator from "./TypingIndicator.svelte";
  import FailedToLoad from "./FailedToLoad.svelte";
  import IconSpinner from "./IconLibrary/IconSpinner.svelte";
  import type { Message } from "../types/message.js";
  export let messages: Message[];

  function handleRetry(messageId: string) {
    const index = messages.findIndex((m) => m.id === messageId);
    if (index !== -1) {
      messages[index].status = "loading";

      setTimeout(() => {
        messages[index].status = "success";
        messages = [...messages];
      }, 2000);
    }
  }

  function handleDelete(messageId: string) {
    messages = messages.filter((m) => m.id !== messageId);
    messages = [...messages];
  }

  function isMessageWithTheSameOrigin(index: number, type: Message["type"]) {
    const prevMessage: Message | undefined = messages[index - 1];
    return prevMessage && prevMessage.type === type;
  }
</script>

<div class="chat-display">
  <FailedToLoad />
  <IconSpinner />

  {#each messages as message, index (message.id)}
    <MessageComponent
      hideAvatar={isMessageWithTheSameOrigin(index, message.type)}
      {message}
      onRetry={() => handleRetry(message.id)}
      onDelete={() => handleDelete(message.id)}
    />
  {/each}
  <TypingIndicator />
</div>

<style>
  .chat-display {
    padding: 20px;
    background-color: #fff;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 24px;

    & button {
      padding: 8px 16px;
      border: none;
      background-color: #473fff;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
    }
  }
</style>
