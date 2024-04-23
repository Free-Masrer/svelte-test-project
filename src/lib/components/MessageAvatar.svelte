<script lang="ts">
  import type { Message } from "../types/message.js";
  import IconAssistant from "./IconLibrary/IconAssistant.svelte";
  import DefaultAvatar from "./IconLibrary/IconDefaultAvatar.svelte";

  export let message: Message;
</script>

<div class="icon-container">
  {#if message.type === "Assistant"}
    <IconAssistant />
  {:else}
    <DefaultAvatar />
  {/if}
</div>

<style>
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 32px;
    background: #edeeff;
    
    min-width: 32px;
  }
</style>
