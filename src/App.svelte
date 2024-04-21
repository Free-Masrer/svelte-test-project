<script lang="ts">
  import TextInput from "./lib/components/TextInput.svelte";
  import ChatDisplay from "./lib/components/ChatDisplay.svelte";
  import type { Message } from "./lib/types/message";

  let messages: Message[] = [
    {
      id: "1234456",
      text: "Hey there! 👋 Would you like me to assist you in choosing best nutrition products??",
      timestamp: new Date(Date.now() - 100000),
      type: "Assistant",
    },
    {
      id: "1236575675",
      text: "Could you provide information about your Mental Clarity & Sleep products?",
      timestamp: new Date(Date.now() - 50000),
      type: "User",
      status: "success",
    },
    {
      id: "5345234545",
      text: "Sure! Would you like to answer acouple of questions first to get a personalised recommendations based on your needs?",
      timestamp: new Date(Date.now() - 10000),
      type: "Assistant",
    },
    {
      id: "123657422345675",
      text: "I want to buy some protein but I dont like Vanilla",
      timestamp: new Date(Date.now() - 50000),
      type: "User",
      status: "error",
    },
  ];

  function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }

  function sendMessage(text: string): void {
    const newMessage: Message = {
      id: generateId(),
      text,
      timestamp: new Date(),
      type: "User",
      status: "loading",
    };
    messages = [...messages, newMessage];
  }
</script>

<main class="container">
  <div class="text-container">
    <ChatDisplay {messages} />
  </div>
  <div class="input-container">
    <TextInput {sendMessage} />
  </div>
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .input-container {
    background: #fff;
  }
  .text-container {
    width: 520px;
  }
</style>
