"use client";

export default function TermsTOC() {
  return (
    <div className="sticky top-5 h-[380px] w-[240px] flex-col lg:flex">
      <h3 className="font-hg text-[20px] font-[500] text-[#048BC4]">
        Contents
      </h3>

      <ol className="mt-[20px] flex list-inside list-decimal flex-col gap-[20px]">
        <li>
          <a href="#tou-01" className="text-[16px] font-[500] text-[#4F4F4F]">
            Acceptance of Terms of Use
          </a>
        </li>

        <li>
          <a href="#tou-02" className="text-[16px] font-[500] text-[#4F4F4F]">
            Definitions
          </a>
        </li>

        <li>
          <a href="#tou-03" className="text-[16px] font-[500] text-[#4F4F4F]">
            Access
          </a>
        </li>

        <li>
          <a href="#tou-04" className="text-[16px] font-[500] text-[#4F4F4F]">
            Registration
          </a>
        </li>

        <li>
          <a href="#tou-05" className="text-[16px] font-[500] text-[#4F4F4F]">
            User Submissions
          </a>
        </li>

        <li>
          <a href="#tou-06" className="text-[16px] font-[500] text-[#4F4F4F]">
            Your conduct
          </a>
        </li>

        <li>
          <a href="#tou-07" className="text-[16px] font-[500] text-[#4F4F4F]">
            Products
          </a>
        </li>

        <li>
          <a href="#tou-08" className="text-[16px] font-[500] text-[#4F4F4F]">
            Intellectual Property Rights
          </a>
        </li>
      </ol>
    </div>
  );
}
