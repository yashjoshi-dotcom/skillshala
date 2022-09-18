function FooterHeading(props) {
  return (
    <h2 className="text-textcolor1 text-2xl font-semibold">{props.heading}</h2>
  );
}

FooterHeading.defaultProps = {
  heading: "Some Heading",
};

export default FooterHeading;
