import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Arrow from "../icons/Arrow";
import {Link} from "react-router-dom";
import '../styles/TermsConditions.css';

const style = {
    borderBottom: '1px solid #bbbbbb',
    paddingBottom: '2%',
    paddingTop: '2%',
    cursor: 'pointer'
};

const headingStyle = {
    outline: 'none'
};

export default function TermsConditions () {
    return (
        <div className="accordionContainer">
            <h1>Terms &#38; Conditions</h1>
            <br/>
            <Accordion>
                <AccordionItem style={style}>
                    <AccordionItemHeading>
                        <AccordionItemButton style={headingStyle}>
                            <h2 className="termsTitle">
                                Shipping Info
                            </h2>
                            <div className="termsArrow">
                                <Arrow/>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="termsText">
                            Most items will be shipped within 1-2 business days of receiving the order. Delivery times are based on orders placed between Monday – Friday.
                            Shipping may take longer time during holidays(i.e. New Year's Day, Christmas, Labor Day, etc.) and other similar dates.
                            Shipping costs will automatically be calculated based on the weight of your order. All international orders will also be shipped through Post system.
                            Tracking and order information will be sent via email when your order is ready to be shipped.
                            <br/><br/>
                            The customer is responsible for any additional local taxes or fees levied upon delivery, by their local jurisdiction,
                            for purchasing items outside their country.
                            Unfortunately, Bagsuz Handcrafted Goods can't be hold responsible for any damage of the package or product item(s) caused by the Post services.
                            <br/><br/>
                            For more information or questions, please email us at <Link to="/contact" className="underline"> zdravo@bagsuz.com</Link>
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem style={style}>
                    <AccordionItemHeading>
                        <AccordionItemButton style={headingStyle}>
                            <h2 className="termsTitle">
                                Returns &#38; Exchange
                            </h2>
                            <div className="termsArrow">
                                <Arrow/>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="termsText">
                            We are not responsible if  the product(s) you've ordered gets damaged by unproper handling (which includes caring in it
                            more than recommended 3kg or being in rough environments (i.e. climbing).
                            Returns that are used, damaged or altered in any way are not eligible for return and may be sent back to the customer.
                            <br/><br/>
                            All products have a guarantee of usage of 1 full year.
                            If you have used a product and are not completely satisfied, please <Link to="/contact" className="underline">contact us</Link> and we'll try to find
                            the best possible solution for both sides.
                            All returns must be sent back within 30 days of delivery of your purchase.
                            <br/><br/>
                            We cannot accept returns for orders damaged or missing in transit via a mail forwarder.
                            <br/><br/>
                            Once your return is received and inspected, we will send you an email to notify you that we have received your returned item.
                            We will also notify you of the approval or rejection of your refund.
                            If you are approved, then your refund will be processed, and a credit will automatically be applied to your
                            credit card or original method of payment, usually within 10 business days.
                            A 15% restocking fee may be applied. Please note that refunds can take up to 10 business
                            days to show up on your account as a result of varying processing times of payment providers.
                            <br/><br/>
                            If you have received an item from Bagsuz Handcrafted Goods as a gift, it may be exchanged for store credit as long as the product is returned unused,
                            unopened (product seals), and in its original packaging.
                            Store credit will then be applied to your account toward future purchases.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem style={style}>
                    <AccordionItemHeading>
                        <AccordionItemButton style={headingStyle}>
                            <h2 className="termsTitle">
                                Privacy Policy
                            </h2>
                            <div className="termsArrow">
                                <Arrow/>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="termsText">
                            This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from bagsuz.com (the “Site”).
                            <br/><br/>
                            We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance
                            with this policy.
                            When you visit the Site, we automatically collect certain information about your device, including information about your web browser,
                            IP address, time zone, and some of the cookies that are installed on your device.
                            Additionally, as you browse the Site, we collect information about the individual web pages or products that you view,
                            what websites or search terms referred you to the Site, and information about how you interact with the Site.
                            We refer to this automatically-collected information as “Device Information.”
                            <br/><br/>
                            We collect Device Information using the following technologies:
                            <br/>
                            <b>1. </b>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier.
                            For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
                            <br/>
                            <b>2. </b>“Log files" track actions occurring on the Site, and collect data including your IP address, browser type,
                            Internet service provider, referring/exit pages, and date/time stamps.
                            <br/>
                            <b>3. </b> “Web beacons,” “tags,” and “pixels" are electronic files used to record information about how you browse the Site.
                            <br/><br/>
                            Additionally, while using our Service, we may ask you to provide us with certain personally identifiable information that can be
                            used to contact or identify you (“Personal Data”, "Personal Information", "Order Information"). Personally identifiable information may include,
                            but is not limited to: Email Address, First Name and Last Name, Phone Number Address, State, Province, ZIP/Postal code, City.
                            <br/><br/>
                            When we talk about “Personal Information” or "Personal Data" in this Privacy Policy, we are talking both about Device Information and Order Information.
                            We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information,
                            arranging for shipping, and providing you with invoices and/or order confirmations).
                            <br/><br/>
                            Additionally, we use this Order Information to:
                            <br/>
                            <b>1. </b>Communicate with you;
                            <br/>
                            <b>2. </b>Screen our orders for potential risk or fraud;
                            <br/>
                            <b>3. </b>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
                            <br/><br/>
                            We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to
                            improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site,
                            and to assess the success of our marketing and advertising campaigns). We also use the Device information that we collect in advertising and targeting.
                            We may use first-party or third-party cookies and web beacons to deliver content, including ads relevant to your interests,
                            on our site or on third-party sites.
                            <br/>
                            If you would like to opt out of the technologies we employ on our site, you may do so by blocking, deleting,
                            or disabling them as your browser or devices permits.
                            <br/>
                            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
                            While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. Please note that we do not alter
                            our Site’s data collection and use practices when we see a Do Not Track signal from your browser.
                            <br/>
                            If you are a resident of the EEA (European Economic Area), you have certain data protection rights. Bagsuz Handcrafted Goods aims take reasonable steps
                            to allow you to correct, amend, delete, or limit the use of your Personal Data. If you wish to be informed what Personal Data we hold about you and if
                            you want it to be removed from our systems, please <Link to="/contact" className="underline">contact us</Link>.
                            <br/>
                            The GDPR includes the following rights for European Union (EU) data subjects who provide their information to the Company
                            in connection with the Services or visiting our Website:
                            <br/>
                            <b>1. </b> The right to be informed about how we store, use, or share your data;
                            <br/>
                            <b>2.</b> The right to access, update or to delete your Personal Data;
                            <br/>
                            <b>3.</b> The right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;
                            <br/>
                            <b>4.</b> The right to object. You have the right to object to our processing of your Personal Data;
                            <br/>
                            <b>5.</b> The right of restriction. You have the right to request that we restrict the processing of your personal information;
                            <br/>
                            <b>6.</b> The right to data portability. You have the right to be provided with a copy of your personal data in a structured, machine-readable and commonly
                            used format;
                            <br/>
                            <b>7.</b> The right to withdraw consent. You also have the right to withdraw your consent at any time where Company
                            relied on your consent to process your personal information.
                            <br/><br/>
                            Please note that we may ask you to verify your identity before responding to such requests.
                            <br/><br/>
                            You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data.
                            For more information, please contact your local data protection authority in the EEA.
                            <br/><br/>
                            Our Service does not address anyone under the age of 18 (“Children”). We do not knowingly collect personally identifiable information from anyone under the age
                            of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please <Link to="/contact" className="underline">contact us</Link>.
                            If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information
                            from our servers.
                            <br/><br/>
                            We will retain your Personal Information for as long as needed to provide the applicable Services.  If, at any time after agreeing to this Privacy Policy, you:
                            <br/>
                            <b>1.</b> Wish to revoke permission for us to retain and use your Personal Information;
                            <br/>
                            <b>2.</b> wish to object to processing of your Personal Information;
                            <br/>
                            <b>3.</b> wish for us to erase a copy of your data, please make a request to the <Link to="/contact" className="underline">Bagsuz Hnadcrafted Goods</Link>.
                            <br/><br/>
                            If you request erasure of your data, we may retain some of your Personal Information only for legitimate business interests,
                            such as fraud detection, prevention, and enhancing the safety of our Website; and to comply with our legal obligations,
                            specifically our tax, legal reporting, and auditing obligations.
                            <br/><br/>
                            We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational,
                            legal or regulatory reasons. Your continued use of the Website following the posting of any changes to this policy means you accept such changes.
                            If you are concerned about potential changes in our Privacy Policy, you should check for an updated version each time you use the Website.
                            You are also advised to review this Privacy Policy periodically for any changes.
                            <br/><br/>
                            <i>This Privacy Policy was last updated on May 27, 2020.</i>
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem style={style}>
                    <AccordionItemHeading>
                        <AccordionItemButton style={headingStyle}>
                            <h2 className="termsTitle">
                                Terms Of Service
                            </h2>
                            <div className="termsArrow">
                                <Arrow/>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="termsText">
                            Throughout the site, the terms “we”, “us” and “our” refer to Bagsuz Handcrafted Goods. Bagsuz Handcrafted Goods offers this website,
                            including all information, tools and services available from this site to you, the user,
                            conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                            <br/><br/>
                            By visiting our site and / or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and
                            conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink.
                            These Terms of Service apply  to all users of the site, including without limitation users who are browsers, vendors, customers, merchants,
                            and/ or contributors of content.
                            <br/><br/>
                            Please read these Terms of Service carefully before accessing or using our website.
                            By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and
                            conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer,
                            acceptance is expressly limited to these Terms of Service.
                            <br/><br/>
                            Any new features or tools which are added to the current store shall also be subject to the Terms of Service.
                            You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update,
                            change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility
                            to check this page periodically for changes. Your continued use of or access to the website following the posting
                            of any changes constitutes acceptance of those changes.
                            <br/><br/>
                            By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence,
                            or that you are the age of majority in your state or province of residence and you have given us your consent
                            to allow any of your minor dependents to use this site. You may not use our products for any illegal or unauthorized purpose nor may you,
                            in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
                            You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the
                            Terms will result in an immediate termination of your Services.
                            <br/><br/>
                            Prices for our products are subject to change without notice.
                            <br/><br/>
                            We have made every effort to display as accurately as possible the colors and images of our products
                            that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
                            <br/><br/>
                            We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction.
                            We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer.
                            All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us.
                            We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.
                            <br/><br/>
                            We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person,
                            per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card,
                            and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order,
                            we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made.
                            We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.
                            <br/><br/>
                            Occasionally there may be information on our site or in the Service that contains typographical errors,
                            inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges,
                            transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change
                            or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice
                            (including after you have submitted your order). We undertake no obligation to update, amend or clarify information in the Service or on any related website,
                            including without limitation, pricing information, except as required by law. No specified update or refresh date
                            applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website,
                            should be taken to indicate that all information in the Service or on any related website has been modified or updated.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};