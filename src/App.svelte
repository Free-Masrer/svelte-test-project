<script>
  import TextInput from "./lib/TextInput/TextInput.svelte";
  import ChatDisplay from "./lib/ChatDisplay/ChatDisplay.svelte";

  let messages = [
    {
      text: "Hey there! 👋 ",
      timestamp: new Date(Date.now() - 100000),
      type: "incoming",
    },
    {
      text: "Hey",
      timestamp: new Date(Date.now() - 50000),
      type: "outgoing",
    },
    {
      text: "Would you like me to assist you in choosing best nutrition products??",
      timestamp: new Date(Date.now() - 10000),
      type: "incoming",
    },
  ];

  function sendMessage(text) {
    const newMessage = {
      text: text,
      timestamp: new Date(),
      type: "outgoing",
    };
    messages = [...messages, newMessage];
  }
</script>

<main>
  <div class="text-container">
    <ChatDisplay {messages} />
  </div>
  <div class="input-container">
    <TextInput {sendMessage} />
  </div>
</main>

<style>
  .input-container {
    padding-top: 16px;
    background: #fff;
  }
  .text-container {
    width: 520px;
  }
</style>
