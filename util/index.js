export function navigateBack() {
  console.log(window.history);
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "/";
  }
}
