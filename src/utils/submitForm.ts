"use server";

export async function submitForm({

  email,
  message,
}:any) { 
  const formResponse = {
    "entry.1789445927": email, 
    "entry.1932817463": message,
    submissionTimestamp: Date.now().toString(),
  };

  try {
  const formUrl = process.env.GOOGLE_FORM_URL || ''
    const response = await fetch(
        formUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formResponse).toString(),
      }
    );

    if (response.ok) {
     return true;
    } else {
    return false;
    }

  } catch (err) {
    console.error(err);

    return false;
  }
}
