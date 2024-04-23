<script lang="ts">
  import type { DeleteFunction, RetryFunction } from "../types/message.js";
  import IconCross from "./IconLibrary/IconCross.svelte";
  import IconRestore from "./IconLibrary/IconRestore.svelte";

  export let onRetry: RetryFunction;
  export let onDelete: DeleteFunction;
</script>

<div class="errors-button">
  <button on:click={onRetry}> <IconRestore /></button>
  <button on:click={onDelete}><IconCross /></button>
</div>

<style>
  .errors-button {
    display: flex;
    padding-top: 8px;
    align-items: flex-start;
    gap: 16px;
  }

  .errors-button button {
    cursor: pointer;
    border: none;
    background: none;
  }
  @media screen and (max-width: 600px) {
    .errors-button {
      gap: 15px;
      padding: 0px;
      align-items: center;
    }
    .errors-button button {
      padding: 0px;
    }
  }
</style>
