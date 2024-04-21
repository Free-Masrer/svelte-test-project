<script lang="ts">
</script>

<div class="indicatorContainer">
  <div class="typingIndicator">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

<style>
  .indicatorContainer {
    display: flex;
    width: 474px;
    align-items: flex-start;
    gap: 12px;
  }
  .typingIndicator {
    display: flex;
    padding: 10px 15px;
    flex-direction: row;
    align-items: flex-start;
    border-radius: 20px;
    background: #f6f7f4;
    position: relative;
    gap: 4px;
  }
  .typingIndicator span {
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 100%;
    background-color: #a6a7a4;
    opacity: 0;
  }
  .typingIndicator span:nth-child(1) {
    animation: opacitychange 1s ease-in-out infinite;
  }

  .typingIndicator span:nth-child(2) {
    animation: opacitychange 1s ease-in-out 0.33s infinite;
  }

  .typingIndicator span:nth-child(3) {
    animation: opacitychange 1s ease-in-out 0.66s infinite;
  }

  @keyframes opacitychange {
    0%,
    100% {
      opacity: 0;
    }

    60% {
      opacity: 1;
    }
  }
</style>
