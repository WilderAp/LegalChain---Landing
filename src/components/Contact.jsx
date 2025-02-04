function Contact() {
  return (
    <div className="grid md:grid-cols-2 text-[#7E0F84] text-center py-20 gap-4">
      <section className="flex flex-col max-w-[436px] mx-auto gap-4">
        <h1 className="font-bold text-2xl">Contact</h1>
        <p>You can contact us through our contact form</p>
      </section>
      <section className="flex flex-col max-w-[436px] mx-auto gap-4">
        <h1 className="font-bold text-2xl">Legal</h1>
        <p className="px-10 md:px-0">
          We have the legal support of a law firm, all our documents are
          protected and professionally endorsed.
        </p>
      </section>
    </div>
  );
}
export default Contact;
