<script lang="ts">
  export let messages;
</script>

<div class="chat-display">
  {#each messages as message}
    <p class={message.type === "incoming" ? "incoming" : "outgoing"}>
      <strong>{message.timestamp.toLocaleTimeString()}:</strong>
      {message.text}
    </p>
  {/each}
</div>

<style>
  .chat-display {
    padding: 10px;
    background-color: #f0f0f0;
    height: 300px;
    overflow-y: scroll;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }
  p {
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    width: fit-content;
    max-width: 80%;
    color: "#000";
  }
  .incoming {
    align-self: flex-start;
    background-color: #000;
  }
  .outgoing {
    align-self: flex-end;
    background-color: #4caf50;
    color: #000;
  }
</style>
