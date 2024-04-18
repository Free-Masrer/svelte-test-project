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
    <input type="text" bind:value={text} placeholder="Type your message here...">
    <button type="submit" disabled={text.trim() === ''}>Send</button>
  </form>
  
  <style>
    /* styles here */
  </style>
  