<script lang="ts">
  import Button from "./Button.svelte";
</script>

<div class="oops">
  <div>
    <span class="title">Oops!</span>
    <span class="text">Something went wrong. Please try again</span>
  </div>
  <Button size="small" variant="primary" label="try again" />
</div>

<style>
  .oops {
    display: flex;
    padding: 40px 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--Spacing-space-s, 20px);

    flex: 1 0 0;
    align-self: stretch;
  }
  .oops div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .oops span {
    color: #000;
    text-align: center;
  }
  .text {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
  }

  .title {
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 115.789% */
  }
</style>
