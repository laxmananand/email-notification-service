const displayName = data.names[0].displayName;
const photo = data.photos[0].url;
const email = data.emailAddresses[0].value;
const data = {
  resourceName: "people/113296512756891916383",
  etag: "%EgkBAgMICS43PT4aBAECBQc=",
  names: [
    {
      metadata: {
        primary: true,
        source: { type: "PROFILE", id: "113296512756891916383" },
        sourcePrimary: true,
      },
      displayName: "Laxman Anand",
      familyName: "Anand",
      givenName: "Laxman",
      displayNameLastFirst: "Anand, Laxman",
      unstructuredName: "Laxman Anand",
    },
  ],
  photos: [
    {
      metadata: {
        primary: true,
        source: { type: "PROFILE", id: "113296512756891916383" },
      },
      url: "https://lh3.googleusercontent.com/a/ACg8ocJn0Mug9FCMXIqpdjDuxzsslsv7jr7WTF4YBan2XTYzZao=s100",
    },
  ],
  genders: [
    {
      metadata: {
        primary: true,
        source: { type: "PROFILE", id: "113296512756891916383" },
      },
      value: "male",
      formattedValue: "Male",
    },
  ],
  emailAddresses: [
    {
      metadata: {
        primary: true,
        verified: true,
        source: { type: "ACCOUNT", id: "113296512756891916383" },
        sourcePrimary: true,
      },
      value: "laxman7291@gmail.com",
    },
  ],
};
