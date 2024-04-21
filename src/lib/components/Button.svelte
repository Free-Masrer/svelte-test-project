<script lang="ts">
  import type { ButtonProps, ButtonIcon } from "../types/button.ts";

  export let size: ButtonProps["size"] = "medium";
  export let variant: ButtonProps["variant"] = "primary";
  export let state: ButtonProps["state"] = "active";
  export let icon: ButtonIcon = null;
  export let label: string = "Button";
  export let restProps: ButtonProps["restProps"] = {};
</script>

<button
  class="button {size} {variant} {state === 'disabled' ? 'disabled' : ''}"
  disabled={state === "disabled"}
  {...restProps}
>
  {#if icon}
    {#if typeof icon === "string"}
      <img src={icon} alt={label} class="icon" />
    {:else}
      <svelte:component this={icon} />
    {/if}
  {/if}
  <span>{label}</span>
</button>

<style>
  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border: none;
    cursor: pointer;
    border-radius: 10px;
  }
  .button span {
    text-transform: uppercase;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 133.333% */
    letter-spacing: 0.75px;
  }

  .button.primary {
    background: #4fa741;
    transition: background 0.3s ease-out;
  }

  .button.disabled {
    background: var(--neutral-40, #e7e8e5);
    pointer-events: none;
  }

  .button.primary span {
    color: #fff;
  }

  .button.primary:hover {
    background: #2b941a;
  }
  .button.primary:active {
    background: #0e6e0a;
  }

  .button.medium {
    height: 50px;
    padding: 0 24px;
  }
  .button.small {
    height: 40px;
    padding: 0px 16px;
  }

  .button.disabled span {
    color: #797a75;
  }
</style>
