"use client";

import { motion } from "framer-motion";
import { useSectionView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SectionHeading from "@/components/section-heading";
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="w-[min(100%, 38rem)] mb-20 scroll-mt-28 text-center sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="-mt-3 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:raviennumnaan@gmail.com">
          raviennumnaan@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async function (formData: FormData) {
          const { data, error } = await sendEmail(formData);
          if (error) {
            return toast.error(error);
          }
          toast.success("Message sent successfully");
        }}
      >
        <input
          className="borderBlack h-14 rounded-lg px-4 transition dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          type="email"
          name="senderEmail"
          placeholder="Your email"
          maxLength={500}
          required
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4 transition dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          placeholder="Your message"
          required
          maxLength={5000}
          name="message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
