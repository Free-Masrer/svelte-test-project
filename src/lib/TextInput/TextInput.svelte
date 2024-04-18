<script>
    export let sendMessage;
  
    let text = '';
  
    function handleSubmit() {
      if (text.trim()) {
        sendMessage(text);
        text = '';
      }
    }
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <div class="chat-field">
    <input type="text" bind:value={text} placeholder="Ask Assistant" class="text-input">
    <button type="submit" disabled={text.trim() === ''}>Send</button>
</div>
  </form>
  
  <style>
    .chat-field {
        display: flex;
        padding: var(--Spacing-space-none, 0px) var(--Spacing-space-xs, 15px);
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        gap: var(--Spacing-space-xxs, 10px);
        align-self: stretch;
    }

    .text-input {
        display: flex;
        padding: 12px 16px;
        align-items: flex-start;
        align-self: stretch;
        border-radius: 10px;
        border: 1px solid var(--gradient-gradient-indigo, #473FFF);

        background: var(--white, #FFF);
    }
  </style>
  