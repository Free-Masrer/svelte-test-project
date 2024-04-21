<script lang="ts">
  import MessageComponent from "./MessageComponent.svelte";
  import type { Message } from "../types/message";
  import TypingIndicator from "./TypingIndicator.svelte";
  import FailedToLoad from "./FailedToLoad.svelte";
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
</script>

<div class="chat-display">
  <FailedToLoad />

  {#each messages as message (message.timestamp)}
    <MessageComponent
      {message}
      onRetry={() => handleRetry(message.id)}
      onDelete={() => handleDelete(message.id)}
    />
  {/each}
  <TypingIndicator />
</div>

<style>
  .chat-display {
    padding: 10px;
    background-color: #fff;
    height: 524px;
    max-height: 524px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
  }
</style>
