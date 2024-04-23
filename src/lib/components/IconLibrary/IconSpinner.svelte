<script lang="ts"></script>

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect x="11" width="2" height="7" rx="1" fill="#4FA741" />
  <rect
    opacity="0.7"
    x="24"
    y="11"
    width="2"
    height="7"
    rx="1"
    transform="rotate(90 24 11)"
    fill="#4FA741"
  />
  <rect
    opacity="0.15"
    x="7"
    y="11"
    width="2"
    height="7"
    rx="1"
    transform="rotate(90 7 11)"
    fill="#4FA741"
  />
  <rect
    opacity="0.1"
    x="9"
    y="7.5"
    width="2"
    height="7"
    rx="1"
    transform="rotate(135 9 7.5)"
    fill="#4FA741"
  />
  <rect
    opacity="0.25"
    width="2"
    height="7"
    rx="1"
    transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 9 16.4141)"
    fill="#4FA741"
  />
  <rect
    opacity="0.8"
    width="2"
    height="7"
    rx="1"
    transform="matrix(0.707107 0.707107 0.707107 -0.707107 15 7.5)"
    fill="#4FA741"
  />
  <rect
    opacity="0.5"
    x="15"
    y="16.4141"
    width="2"
    height="7"
    rx="1"
    transform="rotate(-45 15 16.4141)"
    fill="#4FA741"
  />
  <rect
    opacity="0.4"
    x="11"
    y="17"
    width="2"
    height="7"
    rx="1"
    fill="#4FA741"
  />
</svg>

<style>
  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
