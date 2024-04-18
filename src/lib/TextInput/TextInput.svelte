<script>
  import NorthIcon from "../../assets/iconLibrary/NorthIcon.svelte";
  export let sendMessage;

  let text = "";
  let isActive = false;
  let isButtonDisabled = true;

  function handleInput(event) {
    text = event.target.value;
    if (text.trim() !== "") {
      isButtonDisabled = false;
    } else {
      isButtonDisabled = true;
    }
  }

  function handleFocus() {
    isButtonDisabled = true;
    isActive = true;
  }

  function handleBlur() {
    if (text.trim() === "") {
      isActive = false;
      isButtonDisabled = true;
    }
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
    <div class="input-wrapper">
      <input
        type="text"
        bind:value={text}
        on:input={handleInput}
        on:focus={handleFocus}
        on:blur={handleBlur}
        placeholder="Ask Assistant"
        class="text-input"
      />
      {#if isActive}
        <button
          type="submit"
          disabled={isButtonDisabled}
          class={isButtonDisabled ? "disabled" : "send-button"}
        >
          <NorthIcon className={isButtonDisabled ? "icon-disabed" : "icon"} />
        </button>
      {/if}
    </div>
    <span class="help-text">
      Shopping Assistant does not provide any medical advice
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

    background: var(--white, #fff);
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

    /* Body-2/regular */
    font-family: Figtree;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
  }
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 10px;

    border: 1px solid var(--gradient-gradient-indigo, #473fff);

    background: var(--white, #fff);
  }
  .send-button {
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

  .text-input {
    flex-grow: 1;
    padding: 8px 16px;
    background: none;
    border: none;
    outline: none;
  }

  .help-text {
    color: var(--neutral-10, #797a75);
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

  .disabled {
    position: absolute;
    right: 5px;
    border: none;
    background: none;
    cursor: pointer;
    padding: 5px;
    pointer-events: none;
  }
</style>
