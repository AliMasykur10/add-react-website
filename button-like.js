const e = React.createElement;

// Display a "Like" <button>
function LikeButton() {
  return e("button", { onClick: () => alert("kamu menekan tombol like") }, "Like");
}

const domContainer = document.querySelector(".button-like");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
