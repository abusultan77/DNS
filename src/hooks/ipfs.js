import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");
// export const IpfsStorage = async (file) => {
//   try {
//     const added = await client.add(file);
//     const url = `https://ipfs.infura.io/ipfs/${added.path}`;
//     return url;
//   } catch (error) {
//     console.log("Error uploading file: ", error);
//   }
// };

export const IpfsStorage = async (file) => {
  try {
    let metadata = { image: file };
    const addImage = await client.add(JSON.stringify(file))
    const imageUrl = `https://ipfs.infura.io/ipfs/${addImage.path}`;
    return imageUrl;
  } catch (error) {
    console.log('Error uploading file: ', error)
  }
}
