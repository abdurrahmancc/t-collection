import React from "react";

const About = () => {
  return (
    <div className="bg-violet-100 w-full  min-h-screen ">
      <div class="card max-w-lg bg-base-100 mt-40 max-h-[300px]  shadow-xl mx-auto">
        <figure class="px-10 mx-auto max-w-[150px] pt-5">
          <img
            className=" rounded-full"
            src="https://simgbb.com/avatar/pBSS6n9RBX71.jpg"
            alt="Shoes"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Md Abdur Rahman</h2>
          <p>
            আমার সপ্ন হলো এই দীর্ঘ ৫ মাস কে কাজে লাগিয়ে একটি কম্পানি তেরী করা । এখান থেকে আমার মতো
            আর ১০ জন কর্মসংস্থান গড়ে তুলা। এবং আমার গ্রামের মানুষের জন্য কিছু করা।
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
