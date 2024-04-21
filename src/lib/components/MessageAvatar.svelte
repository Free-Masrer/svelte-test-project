<script lang="ts">
  import type { Message } from "../types/message";
  import IconAssistant from "./IconLibrary/IconAssistant.svelte";
  import DefaultAvatar from "./IconLibrary/IconDefaultAvatar.svelte";

  export let message: Message;
</script>

{#if message.type === "Assistant"}
  <div class="icon-container">
    <IconAssistant />
  </div>
{:else}
  <DefaultAvatar />
{/if}

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
  }
</style>
