export function hideEmail(email: string) {
  let emailCopy = email;
  let emailSplitted = emailCopy.split("@");
  let emailModified = emailSplitted[0]
    .slice(0, emailSplitted[0].length - 3)
    .replace(/./g, "*");
  let emailModified2 = `${emailSplitted[0].slice(
    emailSplitted[0].length - 3,
    emailSplitted[0].length + 1
  )}`;

  return emailModified.concat(emailModified2).concat(`@${emailSplitted[1]}`);
}
