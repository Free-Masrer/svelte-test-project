<script lang="ts">
  export let showModal: Boolean;
  export let className: string = "";

  let dialog: HTMLDialogElement;

  $: if (dialog && showModal) {
    dialog.showModal();
  } else {
    dialog?.close();
  }

  function closeModal() {
    dialog.close();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  class={className}
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={closeModal}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <slot {closeModal} />
  </div>
</dialog>

<style>
  dialog {
    border: none;

    border-radius: 30px 0px 0px 30px;
    background: var(--white);
    box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.05), -8px 0px 20px 0px rgba(0, 0, 0, 0.10);
  }
  dialog > div {
    height: 100%;
    width: 100%;
  }
  dialog::backdrop {
    background: transparent;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
