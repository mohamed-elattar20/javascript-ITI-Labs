fetch("https://api.npoint.io/838397f84625a7abd979")
  .then((response) => response.json())
  .then((arrOfUsers) => {
    // console.log(arrOfUsers);
    arrOfUsers.forEach((user) => {
      user.fullName = `${user.firstName} ${user.lastName}`;
      // console.log(user);
    });

    let filterdUsers = arrOfUsers.filter(
      (user) => user.gender == "male" && user.age > 30
    );
    // console.log(filterdUsers);

    let filterdByNation = arrOfUsers.reduce((acc, curr) => {
      acc[curr.nationality] = arrOfUsers.filter(
        (ele) => ele.nationality == curr.nationality
      );
      return acc;
    }, {});
    console.log(filterdByNation);

    // let myObj = {};
    // arrOfUsers.reduce((acc, curr) => {
    //   // console.log(acc);
    //   myObj[curr.nationality] = arrOfUsers.filter(
    //     (ele) => ele.nationality == curr.nationality
    //   );
    // }, {});
    // console.log(myObj);

    // let objectOfUsers = {};
    // arrOfUsers.forEach((user) => {
    //   if (!objectOfUsers[user.nationality]) {
    //     objectOfUsers[user.nationality] = [user];
    //   } else {
    //     objectOfUsers[user.nationality].push(user);
    //   }
    // });
    // console.log(objectOfUsers);
  });
