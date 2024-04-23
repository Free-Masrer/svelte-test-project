<script lang="ts">
  import TextInput from "./TextInput.svelte";
  import ChatDisplay from "./ChatDisplay.svelte";
  import type { Message } from "../types/message.js";
  import {
    createMessage,
    transformUIMessageToMessage,
    TEMPORARY_MESSAGE_ID,
  } from "../utils/createMessage.js";
  import Modal from "./Modal.svelte";
  import IconAssistantWhite from "./IconLibrary/IconAssistantWhite.svelte";
  import IconAssistantBlack from "./IconLibrary/IconAssistantBlack.svelte";
  import IconCollapse from "./IconLibrary/IconCollapse.svelte";
  import { postMessage } from "../utils/postMessage.js";
  import { onMount } from "svelte";
  import { listenForUser, type UserInfo } from "../utils/events/listenForUser";

  let showModal = false;
  let messages: Message[] = [];
  let isWaitingForResponse = false;

  function updateUser(userInfo: UserInfo) {
    console.log(userInfo);
  }

  onMount(() => {
    const off = listenForUser(updateUser);

    return () => {
      off();
    };
  });

  function sendMessage(text: string): void {
    const newMessage = createMessage(text);
    messages = [...messages, transformUIMessageToMessage(newMessage)];

    isWaitingForResponse = true;
    postMessage(newMessage)
      .then((responseMessages) => {
        const [userMessage, aiMessage] = responseMessages;
        const sanitizedMessages = messages.filter(
          (messages) => messages.id !== TEMPORARY_MESSAGE_ID
        );
        const newMessages = [...sanitizedMessages, userMessage];
        if (aiMessage) {
          newMessages.push(aiMessage);
        }
        messages = newMessages;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        isWaitingForResponse = false;
      });
  }

  function closeModal() {
    showModal = false;
  }

  function openModal() {
    showModal = true;
  }
</script>

<button on:click={openModal} class="assistantToggle">
  <IconAssistantWhite />
</button>

<Modal bind:showModal className="modal">
  <main class="container">
    <header>
      <div>
        <IconAssistantBlack />
        <span>Assistant</span>
      </div>
      <button on:click={closeModal}><IconCollapse /></button>
    </header>
    <ChatDisplay {messages} />
    <div class="input-container">
      <TextInput {sendMessage} isInputDisabled={isWaitingForResponse} />
    </div>
  </main>
</Modal>

<style>
  .assistantToggle {
    display: flex;
    width: 50px;
    height: 50px;
    padding: 13px;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 20px;
    bottom: 20px;

    cursor: pointer;
    border: none;
    border-radius: 100px;
    background: linear-gradient(45deg, #473fff 0%, #9a59ff 100%);
  }
  :global(.modal) {
    max-height: unset;
    max-width: unset;
    height: 100vh;
    width: 550px;
    padding: 0;
    right: 0;
    left: unset;
    margin: unset;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    & header {
      box-sizing: border-box;
      width: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      padding-inline: 16px 20px;
      padding-block: 18px;
      & > div {
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      & button {
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
        height: 24px;
      }
    }
  }
  .input-container {
    padding-top: 16px;
    background: #fff;
    border-top: none;
  }

  @media screen and (max-width: 600px) {
    :global(.modal) {
      width: 100%;
    }
    .input-container {
      padding-top: 0px;
      border-top: 1px solid #e7e8e5;
    }
  }
</style>
