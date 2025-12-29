/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Gunakan JavaScript Modern.
 */
const users = [
  {name: "Jhon Still", age: 19, major: "Teknik Informatika"},
  {name: "Raja Marisa", age: 20, major: "Teknik Sipil"},
  {name: "Rebby Mangi", age: 30, major: "Pendidikan"},
  {name: "Marisa Rebbyt", age: 21, major: "PGSD"},
  {name: "Kankan Syarip", age: 35, major: "PAI"},
];

/**
 * Helper async
 * Jangan dihapus
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * TODO 2
 * Buat function all (ASYNC):
 * Menampilkan semua data user.
 * Hint:
 * - Gunakan async/await
 * - Gunakan for / for-of
 */
const all = async () => {
  await delay(300);
  // isi di sini
  for (const user of users) {
    console.log(user);
  };
};

/**
 * TODO 3
 * Buat function store (ASYNC):
 * Menambahkan user baru.
 * Hint:
 * - Gunakan async/await
 * - Gunakan method push
 * - Setelah menambah data, tampilkan semua user
 */
const store = async (user) => {
  await delay(300);
  // isi di sini
  users.push({name: "Hamdan Hapidin", age: 23, major: "PGPAUD"});
  for (const user of users) {
    console.log(user);
    
  }
};

/**
 * TODO 4
 * Buat function update (ASYNC):
 * Mengedit data user berdasarkan index.
 * Hint:
 * - Gunakan async/await
 * - Gunakan splice
 * - Setelah update, tampilkan semua user
 */
const update = async (index, user) => {
  await delay(300);
  // isi di sini
  users.splice(4, 1, {name: "Ahmad Syangkan", age: 25, major: "PAI"});
 
  users.forEach((element) => {
    console.log(element);
    
  });
};

/**
 * TODO 5
 * Buat function destroy (ASYNC):
 * Menghapus data user berdasarkan index.
 * Hint:
 * - Gunakan async/await
 * - Gunakan splice
 * - Setelah delete, tampilkan semua user
 */
const destroy = async (index) => {
  await delay(300);
  // isi di sini
  users.splice(3,1)
  users.forEach((item) => {
    console.log(item);
    
  });
};

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */
async function main() {
  console.log("# Get All Users");
  await all();

  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  await store(newUser);

  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  await update(editedIndex, editedUser);

  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  await destroy(deletedIndex);
}

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
