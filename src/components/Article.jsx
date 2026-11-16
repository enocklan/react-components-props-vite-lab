
function Article({
  title,
  date = "January 1, 1970",
  preview,
  minutes
}) {
  // Calculate reading time indicators
  let readingIndicator;

  if (minutes < 30) {
    const coffeeCups = Math.ceil(minutes / 5);
    readingIndicator = "☕️".repeat(coffeeCups);
  } else {
    const bentoBoxes = Math.ceil(minutes / 10);
    readingIndicator = "🍱".repeat(bentoBoxes);
  }

  return (
    <article>
      <h3>{title}</h3>

      <small>{date}</small>

      <p>{preview}</p>

      <small>
        {readingIndicator} {minutes} min read
      </small>
    </article>
  );
}

export default Article;
