<script lang="ts">
</script>

<div class="container">
  <div class="failed-to-load-box">
    <span>Failed to load</span>
    <button> Retry </button>
  </div>
</div>

<style>
  .container {
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
  }
  .failed-to-load-box {
    display: flex;
    height: 50px;
    padding: 0px 10px 0px 15px;

    justify-content: center;
    align-items: center;
    border-radius: 12px;

    background: #000;
  }
  .failed-to-load-box span {
    color: #fff;
    /* Body-2/regular */
    font-family: Figtree;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
  }
  .failed-to-load-box button {
    display: flex;
    height: 35px;
    padding: 0px 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;
    gap: 5px;
    color: #89db6d;
  }
</style>
