"use client";

export default function OfferRule() {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="flex flex-row items-center gap-[12px] rounded-t-[6px] bg-[#ECF2F5] px-[12px] py-[16px]">
        <img src="/images/offer/icon01.png" alt="icon01" />

        <h3 className="text-[18px] font-[500] text-[#FA5B32]">
          Important information about buying process
        </h3>
      </div>

      <ol className="list-decimal py-[16px] pl-[64px] pr-[32px]">
        <li className="font-[400] text-[#333333] text-[150x]">
          We will e-mail you a confirmation receipt that your offer has been
          received and immediately notify the seller. If there are multiple
          offers submitted, we will notify all buyers who have submitted offers
          to provide their best and final offer. When an offer is accepted a
          contract will be created, and at the time of contract the buyer will
          be required to send the title company escrow in the amount of 10% of
          the purchase price up to $2,000 with a minimum of $500. Please note,
          the closing costs we provide is an estimate provided by the title
          company. If you are financing it is recommended to obtain financing
          approval prior to making an offer, however, it is not required.
        </li>

        <li className="font-[400] text-[#333333] text-[150x]">
          An offer consists of:
          <ul className="list-disc px-[24px]">
            <li className="font-[400] text-[#333333] text-[150x]">
              Per Point Price
            </li>

            <li className="font-[400] text-[#333333] text-[150x]">
              Confirmation of who is paying closing costs (traditionally buyer
              pays closing costs due to sellers paying sales commission)
            </li>

            <li className="font-[400] text-[#333333] text-[150x]">
              Confirmation of who is paying current year&#x27;s dues
            </li>
          </ul>
        </li>

        <li className="font-[400] text-[#333333] text-[150x]">
          It takes approximately 60-90 days for a contract to close. This is
          typically the time frame because after we receive both Buyer&#x27;s
          and Seller&#x27;s signed contract, everything goes to Disney Vacation
          Club for Right of First Refusal or commonly abbreviated as ROFR.
          Disney has 30 days to review the contract and decide whether to
          exercise their right or not. Once approved, Disney sends an estoppel
          to the title company and the title company then can prepare final
          documents. After the final documents have been executed and returned
          (along with the monies due from the Buyer), the contract closes and
          Disney is notified of the transfer of title. After the contract is
          closed Disney then makes the final transfer of membership, which takes
          approximately 2 weeks. Once the new membership is set up by Disney,
          they will mail you a letter in the mail with your Membership number.
        </li>
      </ol>
    </div>
  );
}
