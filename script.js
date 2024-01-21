const root = document.getElementById("root");

function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => userInfo(data));
}
getData();

function showDetails(user) {
  const { name, email, phone, website, address } = user;

  const src = `https://picsum.photos/id/${
    Math.ceil(Math.random() * 99) + 1
  }/500`;
  let userCard = `
        <div class="singleCard">
        <img src=${src} alt="">
          <div>
          <h1>${name}</h1>
          <p>${email}</p>
          <p>${phone}</p>
          <p>${website}</p>
          <p>${address.city}</p>
          <button class="go-back btn">Go Back</button>
          </div>
        </div>
          `;
  //   window.open().document.write(userCard);
  root.innerHTML = userCard;

  root.querySelector(".go-back").addEventListener("click", () => {
    root.innerHTML = "";
    getData();
  });
}

function userInfo(users) {
  users.forEach((user) => {
    const { name, email } = user;
    const card = document.createElement("div");
    const src = `https://picsum.photos/id/${
      Math.ceil(Math.random() * 99) + 1
    }/350`;
    card.setAttribute("class", "singleCard");
    card.innerHTML = `<img src=${src} alt="">
                    <h1>${name}</h1>
                    <p>${email}</p>
                    <button class="btn">More Details</button>`;
    card
      .querySelector(".btn")
      .addEventListener("click", () => showDetails(user));
    root.appendChild(card);
  });
}
