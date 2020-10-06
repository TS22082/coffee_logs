$(document).ready(function () {
  $(".parallax").parallax();

  const createLog = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "POST",
        url: "/logs/new",
        data: {
          company: $("#companyInput").val().trim(),
          roast: $("#roastInput").val().trim(),
          name: $("#nameInput").val().trim(),
          description: $("#descriptionInput").val().trim(),
        },
      }).then(() => {
        $("#companyInput").val("");
        $("#roastInput").val("");
        $("#nameInput").val("");
        $("#descriptionInput").val("");
        logInstance.close();
        resolve("success");
      });
    });
  };

  const renderLogs = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url: "/logs/user",
      }).then((logs) => {
        $("#logsContainer").empty();
        logs.forEach((log) => {
          let { name, company, roast, description } = log;
          if (name) {
            name = `<p>${name}</p>`;
          } else {
            name = "";
          }
          $("#logsContainer").append(`
          <div class="row">
            <div class="card brown darken-1">
              <div class="card-content white-text">
                <div class="row">
                  <div class="col s6">
                    <p class="card-title">${company}</p>
                    <p>${name} </p>
                    <p>${roast} </p>
                  </div>
                  <div class="col s6">
                    <p>${description}</p>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          `);

          resolve("success");
        });
      });
    });
  };

  $(".parallax").parallax();
  $(".sidenav").sidenav();

  const logModal = document.getElementById("newLogModal");
  const logInstance = M.Modal.init(logModal, { dismissible: true });

  renderLogs();

  $("#newLogBtn").on("click", () => logInstance.open());
  $("#logCancel").on("click", () => logInstance.close());

  $("#logForm").on("submit", (e) => {
    e.preventDefault();
    createLog().then(() => renderLogs());
  });
});
