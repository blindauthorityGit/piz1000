// client.js
import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "7all625u", // you can find this in sanity.json
    dataset: "dev", // or the name you chose in step 1
    // token: "skvItdNUnTngVq9iuBNZ6aT88xHfLVHIZAQr5eiK1wZrWoawPEym0AyAMEs5Dg9m6YptouKmufLJOy5rA0c7R1lcJsxTO72yuEtZUIqnfEbmqliFAz8OV1I9AZ9xwQXuCNMtuaCx8Bk4Kb7jlMJlJ8SXeTezno9e6jgRi0ZsL1F1vxdK7S8S",
    useCdn: true, // `false` if you want to ensure fresh data
});
