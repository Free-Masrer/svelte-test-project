<script lang="ts">
  import NorthIcon from "../../assets/iconLibrary/NorthIcon.svelte";
  export let sendMessage;
  export let isInputDisabled = false;

  let text = "";
  let isActive = false;
  let isButtonDisabled = true;

  function handleInput(event) {
    text = event.target.value;
    isButtonDisabled = text.trim() === "";
  }

  function handleFocus() {
    isActive = true;
  }

  function handleBlur() {
    isActive = text.trim() !== "";
    isButtonDisabled = text.trim() === "";
  }

  function handleSubmit() {
    if (text.trim()) {
      sendMessage(text);
      text = "";
      isButtonDisabled = true;
      isActive = false;
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
      <input
        type="text"
        bind:value={text}
        on:input={handleInput}
        on:focus={handleFocus}
        on:blur={handleBlur}
        disabled={isInputDisabled}
        placeholder="Ask Assistant"
        class="text-input"
      />
      {#if isActive}
        <button type="submit" disabled={isButtonDisabled}>
          <NorthIcon className={isButtonDisabled ? "icon-disabed" : "icon"} />
        </button>
      {/if}
    </div>
    <span class="help-text">
      Shopping Assistant does not provide any medical advice
    </span>
  </div>
</form>

<style>
  .chat-field {
    display: flex;
    width: 480px;
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

    font-family: Figtree;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
    color: #473fff;
  }

  .input-wrapper .text-input {
    overflow: hidden;
    color: #000;
    text-overflow: ellipsis;

    font-family: Figtree;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
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
    background: none;
    cursor: pointer;
    padding: 5px;
    border-radius: 100px;
    background: #5840ff;
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
    /* Tag/Regular */
    font-family: Figtree;
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
</style>
