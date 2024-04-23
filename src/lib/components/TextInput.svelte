<script lang="ts">
  import type { SendMessageFunction } from "../types/message.js";
  import NorthIcon from "./IconLibrary/IconNorth.svelte";

  export let sendMessage: SendMessageFunction;
  export let isInputDisabled = false;

  let text: string = "";
  let isActive: boolean = false;
  let isButtonDisabled: boolean = isInputDisabled || true;

  function handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    text = input.value;
    isButtonDisabled = text.trim() === "";
  }

  function handleFocus(): void {
    isActive = true;
  }

  function handleBlur(): void {
    isActive = text.trim() !== "";
    isButtonDisabled = text.trim() === "";
  }

  function handleSubmit(): void {
    if (text.trim().length > 0) {
      sendMessage(text);
      text = "";
      isButtonDisabled = true;
      isActive = true;
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="chat-field">
    <div
      aria-disabled={isInputDisabled}
      class={isActive ? "input-wrapper-active input-wrapper" : "input-wrapper"}
      class:disabled={isInputDisabled}
    >
      <!-- svelte-ignore a11y-autofocus -->
      <input
        type="text"
        bind:value={text}
        on:input={handleInput}
        on:focus={handleFocus}
        on:blur={handleBlur}
        disabled={isInputDisabled}
        placeholder="Ask Assistant"
        class="text-input"
        autofocus
      />
      {#if isActive}
        <button class="hide-on-phone" type="submit" disabled={isButtonDisabled}>
          <NorthIcon className={isButtonDisabled ? "icon-disabled" : "icon"} />
        </button>
      {/if}
    </div>
    {#if isActive}
      <button class="hide-on-desktop" type="submit" disabled={isButtonDisabled}>
        <NorthIcon className={isButtonDisabled ? "icon-disabled" : "icon"} />
      </button>
    {/if}
    <span class="help-text">
      Shopping Assistant does not provide any medical advice
    </span>
  </div>
</form>

<style>
  .chat-field {
    display: flex;
    padding: 0px 20px 8px 20px;

    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;

    background: #fff;
  }
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #473fff;
    background: #fff;
  }

  .input-wrapper .text-input::placeholder {
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: #473fff;
  }

  .input-wrapper .text-input {
    overflow: hidden;
    color: #000;
    text-overflow: ellipsis;

    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .input-wrapper,
  .text-input {
    transition: background-color 0.3s ease;
  }

  .input-wrapper:disabled,
  .input-wrapper.disabled {
    background-color: #f6f7f4;
    border-color: #c9cac6;
    border: 1px solid #f6f7f4;
    color: #c9cac6 !important;
  }

  .input-wrapper-active {
    border: 1px solid #e7e8e5;
  }

  .input-wrapper-active .text-input::placeholder {
    color: #a6a7a4;
  }

  button {
    position: absolute;
    right: 5px;
    width: 32px;
    height: 32px;
    border: none;
    cursor: pointer;
    padding: 6px;
    border-radius: 100px;
    background-color: #5840ff;
    transition: background-color 0.3s ease;
  }
  button:disabled {
    position: absolute;
    right: 5px;
    border: none;
    background: none;
    padding: 5px;
    pointer-events: none;
    cursor: not-allowed;
  }

  .text-input {
    flex-grow: 1;
    padding: 12px 48px 12px 16px;
    caret-color: #5840ff;
    background: none;
    border: none;
    outline: none;
  }

  .help-text {
    color: #797a75;
    text-align: center;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 145.455% */
  }
  .text-input:disabled,
  .text-input:disabled::placeholder,
  .input-wrapper:disabled,
  .input-wrapper.disabled::placeholder {
    color: #c9cac6;
  }
  .hide-on-desktop {
    display: none;
    visibility: hidden;
  }
  .hide-on-phone {
    display: flex;
    visibility: visible;
  }

  @media screen and (max-width: 600px) {
    form {
      width: 100%;
    }
    .chat-field {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }
    .help-text {
      display: none;
      visibility: hidden;
    }

    .chat-field {
      flex-direction: row;
      justify-content: space-between;
      padding: 10px;
      width: 100%;
    }

    .input-wrapper {
      display: flex;
      flex: 1 0 0;
      position: relative;
      border-radius: 20px;
    }

    button {
      position: static;
      display: flex;
      width: 40px;
      height: 40px;
      padding: 8px;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }
    button:disabled {
      position: static;
      background: #f6f7f4;
      width: 40px;
      height: 40px;
      padding: 8px;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      border-radius: 100px;
    }
    .hide-on-phone {
      display: none;
      visibility: hidden;
    }
    .hide-on-desktop {
      display: flex;
      visibility: visible;
    }

    .help-text {
      display: none;
      visibility: hidden;
    }
  }
</style>
