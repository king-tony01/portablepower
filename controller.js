// All the various sections are stored in this array of UI

const uis = [
  {
    id: "dashboard",
    data: `        
    <div class="title"><h2>Dashboard</h2></div>
    <div class="wrapper">
          <div class="overview">
            <div class="balance">
              <p>Wallet</p>
              <b>R 1200</b>
            </div>
          </div>
          <div class="history">
            <h4>History</h4>
            <div class="cards-container">
              <div class="card">
                <img src="./images/plant-large-02.JPG" alt="" />
                <div>
                  <b>WEDO</b><small>Date rented: April 11 2023</small>
                  <div class="below">
                    <button>Details</button>
                    <h5>R250</h5>
                  </div>
                </div>
              </div>
              <div class="card">
                <img src="./images/plant-large-05.JPG" alt="" />
                <div>
                  <b>CHAMPION</b><small>Date rented: April 11 2023</small>
                  <div class="below">
                    <button>Details</button>
                    <h5>R250</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`,
  },
  {
    id: "browseSolution",
    data: `        <div class="title"><h2>Browse power solution</h2></div>
        <div class="browse-container">
          <h2>Top choice</h2>
          <div class="product-cards">
            <div class="product-card">
              <img src="./images/plant-mini-01.jpg" alt="" />
              <strong>RYOBI</strong>
              <small>Type: <b>Generator</b></small>
              <small>Fuel type: <b>Gasoline</b></small>
              <small
                >Location: <b> Gladstone house 31 Buffalo Street.</b></small
              >
              <span class="period">Period: 2months</span>
              <div class="below-con">
                <button>Rent</button>
                <b>R 15</b>
              </div>
            </div>
            <div class="product-card">
              <img src="./images/plant-mini-03.jpg" alt="" />
              <strong>ARC</strong>
              <small>Type: <b>Generator</b></small>
              <small>Fuel type: <b>Gasoline</b></small>
              <small
                >Location: <b> Gladstone house 31 Buffalo Street.</b></small
              >
              <span class="period">Period: 2months</span>
              <div class="below-con">
                <button>Rent</button>
                <b>R 20</b>
              </div>
            </div>
            <div class="product-card">
              <img src="./images/plant-mini-04.jpg" alt="" />
              <strong>RYOBI</strong>
              <small>Type: <b>Generator</b></small>
              <small>Fuel type: <b>Gasoline</b></small>
              <small
                >Location: <b> Gladstone house 31 Buffalo Street.</b></small
              >
              <span class="period">Period: 2months</span>
              <div class="below-con">
                <button>Rent</button>
                <b>R 20</b>
              </div>
            </div>
            <div class="product-card">
              <img src="./images/plant-large-01.JPG" alt="" />
              <strong>ELEPAQ</strong>
              <small>Type: <b>Generator</b></small>
              <small>Fuel type: <b>Gasoline</b></small>
              <small
                >Location: <b> Gladstone house 31 Buffalo Street.</b></small
              >
              <span class="period">Period: 2months</span>
              <div class="below-con">
                <button>Rent</button>
                <b>R 50</b>
              </div>
            </div>
            <div class="product-card">
              <img src="./images/plant-mini-05.jpg" alt="" />
              <strong>JACKERY</strong>
              <small>Type: <b>Generator</b></small>
              <small>Fuel type: <b>Gasoline</b></small>
              <small
                >Location: <b> Gladstone house 31 Buffalo Street.</b></small
              >
              <span class="period">Period: 2months</span>
              <div class="below-con">
                <button>Rent</button>
                <b>R 15</b>
              </div>
            </div>
            <div class="product-card">
              <img src="./images/plant-large-02.JPG" alt="" />
              <strong>WEDO</strong>
              <small>Type: <b>Generator</b></small>
              <small>Fuel type: <b>Gasoline</b></small>
              <small
                >Location: <b> Gladstone house 31 Buffalo Street.</b></small
              >
              <span class="period">Period: 2months</span>
              <div class="below-con">
                <button>Rent</button>
                <b>R 60</b>
              </div>
            </div>
          </div>
        </div>`,
  },
  {
    id: "message",
    data: `        
    <div class="title"><h2>Message</h2></div>
    <div class="message">
          <div class="message-container">
            <div class="message-head">
              <i class="fas fa-chevron-left"></i>
              <h3>Messages</h3>
            </div>
            <div class="message-content">
              <div class="users">
                <div class="user-pic-and-name">
                  <img src="./images/user-01.jpg" alt="" />
                  <div>
                    <b class="name">YONGAMA MAKELENI</b>
                    <small>I recieved your message...</small>
                  </div>
                </div>
                <div class="role-and-title">
                  <span class="role">VENDOR</span>
                  <span class="time">02:45</span>
                </div>
              </div>
            </div>
          </div>
        </div>`,
  },
  {
    id: "wallet",
    data: ` <div class="title"><h2>Wallet</h2></div>
        <div class="wallet">
          <div class="wallet-balance">
            <small>Account balance</small>
            <h3>R 1200</h3>
          </div>
          <div class="action">
            <div class="card">
              <i class="fas fa-wallet"></i>
              <p>Deposit</p>
            </div>
            <div class="card withdraw">
              <i class="fas fa-square-arrow-up-right"></i>
              <p>Withdraw</p>
            </div>
          </div>
          <div class="recent">
            <h4>Transactions</h4>
            <div class="recent-depo-card">
              <div>
                <b>1000</b>
                <small class="reason">Deposit</small>
              </div>
              <div class="status">
                <small>Successful</small>
                <div class="time">15/05/2023</div>
              </div>
            </div>
            <div class="recent-depo-card">
              <div>
                <b>-200</b>
                <small class="debit">Debit</small>
              </div>
              <div class="status">
                <small>Successful</small>
                <div class="time">15/05/2023</div>
              </div>
            </div>
            <div class="recent-depo-card">
              <div>
                <b>500</b>
                <small class="reason">Deposit</small>
              </div>
              <div class="status">
                <small>Successful</small>
                <div class="time">15/05/2023</div>
              </div>
            </div>
          </div>
        </div>`,
  },
  {
    id: "profile",
    data: `<div class="title"><h2>Profile</h2></div>
        <div class="profile-header">
          <div class="profile">
            <img src="./images/user-01.jpg" alt="" />
            <div class="username">YONGAMA MAKELENI</div>
          </div>
          <div class="details">
            <div>
              <label for="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value="Yongama"
              />
            </div>
            <div>
              <label for="lastName">Last Name:</label>
              <input
                type="text"
                name="firstName"
                id="lastName"
                value="Makeleni"
              />
            </div>
            <div>
              <label for="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value="yongamamakeleni@gmail.com"
              />
            </div>
            <div>
              <label for="phone">Phone:</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value="+27 83 864 3269"
              />
            </div>
          </div>
          <div class="address">
            <span class="address">Address</span>
            <address>Gladstone house 31 Buffalo Street</address>
          </div>
        </div>`,
  },
];

const parentContainer = document.querySelector(".main");
const navigation = document.getElementById("navigation");

navigation.addEventListener("click", (e) => {
  try {
    //1) Getting the tab that is clicked
    const currentNav = e.target.closest("li").dataset.id;

    // 2)Checking for logout tab and logging out
    if (currentNav == "logout") {
      location.replace("index.html");
      return;
    }

    // 3) Finding the ui ID that matches the clicked tab dataset
    const appropriateUi = uis.find((ui) => {
      return ui.id == currentNav;
    });

    // 4) Rendering the appropriate ui
    parentContainer.innerHTML = appropriateUi.data;
  } catch (err) {
    // Handling errors
    parentContainer.innerHTML = `<div class="error">
          <div>
            <i class="fas fa-triangle-exclamation"></i>
            <b>Something really bad happened somewhere</b>
          </div>
        </div>`;
  }
});
