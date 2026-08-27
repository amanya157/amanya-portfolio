// React hook used to control the Mobile Money popup
// and the "Copied" message.
import { useState } from "react";

// Import the Support section styling.
import "./Support.css";

// Import the actual Buy Me a Coffee logo
// from the assets folder.
import buyMeACoffeeLogo from "../assets/buy-me-a-coffee.png";


function Support() {

  // Stores which payment option is currently open.
  // It can be "mtn" or null.
  const [activePayment, setActivePayment] = useState(null);

  // Stores which number has been copied.
  const [copied, setCopied] = useState("");


  // =====================================================
  // COPY NUMBER FUNCTION
  // =====================================================

  const copyNumber = async (number, label) => {

    try {

      // Copy the number to the visitor's clipboard.
      await navigator.clipboard.writeText(number);

      // Show "Copied" for this particular number.
      setCopied(label);

      // Remove the copied message after 2 seconds.
      setTimeout(() => {
        setCopied("");
      }, 2000);

    } catch (error) {

      // Show an error in the browser console
      // if copying does not work.
      console.error("Could not copy number:", error);

    }
  };


  return (

    // =====================================================
    // SUPPORT MY WORK SECTION
    // =====================================================

    <section
      className="support-section"
      id="support"
    >

      <div className="support-container">


        {/* =================================================
            SECTION HEADING
            ================================================= */}

        <div className="section-heading support-heading">

          {/* Small section label */}
          <p className="section-label">
            SUPPORT MY WORK
          </p>


          {/* Main heading */}
          <h2>
            Want to <span>Support Me?</span>
          </h2>


          {/* Description */}
          <p className="support-intro">
            If you would like to support my work, learning and
            continued development in technology, you can choose
            one of the available options below.
          </p>

        </div>



        {/* =================================================
            PAYMENT OPTIONS
            ================================================= */}

        <div className="payment-grid">


          {/* =================================================
              MOBILE MONEY
              ================================================= */}

          <button
            className="payment-card"
            onClick={() => setActivePayment("mtn")}
          >

            {/* MTN logo */}
            <div className="payment-logo mtn-logo">
              MTN
            </div>


            {/* Payment information */}
            <div className="payment-info">

              <span>
                PAYMENT METHOD
              </span>

              <h3>
                Mobile Money
              </h3>

              <p>
                Send support through MTN Mobile Money.
              </p>

            </div>


            {/* Arrow */}
            <div className="payment-arrow">
              ↗
            </div>

          </button>



          {/* =================================================
              BUY ME A COFFEE
              
              This is an external link.
              It opens your Buy Me a Coffee page.
              ================================================= */}

          <a
            href="https://buymeacoffee.com/amagod"
            target="_blank"
            rel="noopener noreferrer"
            className="payment-card coffee-payment-card"
          >

            {/* Actual Buy Me a Coffee logo
                imported from src/assets */}
            <div className="payment-logo coffee-logo">

              <img
                src={buyMeACoffeeLogo}
                alt="Buy Me a Coffee"
              />

            </div>


            {/* Payment information */}
            <div className="payment-info">

              <span>
                PAYMENT METHOD
              </span>

              <h3>
                Buy Me a Coffee
              </h3>

              <p>
                Support my work through Buy Me a Coffee.
              </p>

            </div>


            {/* External-link arrow */}
            <div className="payment-arrow">
              ↗
            </div>

          </a>

        </div>

      </div>



      {/* ===================================================
          MOBILE MONEY POPUP
          
          This popup only appears when Mobile Money
          is selected.
          =================================================== */}

      {activePayment && (

        <div
          className="payment-overlay"

          // Clicking the dark area closes the popup.
          onClick={() => setActivePayment(null)}
        >

          <div
            className="payment-modal"

            // Prevent clicking inside the popup
            // from closing it.
            onClick={(event) => event.stopPropagation()}
          >


            {/* =================================================
                CLOSE BUTTON
                ================================================= */}

            <button
              className="close-payment"
              onClick={() => setActivePayment(null)}
              aria-label="Close payment details"
            >
              ×
            </button>



            {/* =================================================
                MTN PAYMENT DETAILS
                ================================================= */}

            {activePayment === "mtn" && (

              <>

                {/* MTN logo */}
                <div className="modal-payment-logo mtn-logo">
                  MTN
                </div>


                {/* Payment type */}
                <p className="modal-label">
                  MOBILE MONEY
                </p>


                {/* Heading */}
                <h3>
                  MTN Mobile Money
                </h3>


                {/* Instructions */}
                <p className="modal-description">
                  You can support me through either of the
                  following MTN Mobile Money numbers.
                </p>



                {/* =================================================
                    KIRABO ANNET
                    ================================================= */}

                <div className="payment-detail">

                  {/* Name */}
                  <div>

                    <span>
                      NAME
                    </span>

                    <strong>
                      Kirabo Annet
                    </strong>

                  </div>


                  {/* Number and copy button */}
                  <div className="number-row">

                    <div>

                      <span>
                        MTN NUMBER
                      </span>

                      <strong>
                        +250 794 440 331
                      </strong>

                    </div>


                    {/* Copy button */}
                    <button
                      type="button"
                      onClick={() =>
                        copyNumber(
                          "+250794440331",
                          "kirabo"
                        )
                      }
                    >
                      {copied === "kirabo"
                        ? "Copied ✓"
                        : "Copy"}
                    </button>

                  </div>

                </div>



                {/* =================================================
                    AMANYA GODFREY
                    ================================================= */}

                <div className="payment-detail">

                  {/* Name */}
                  <div>

                    <span>
                      NAME
                    </span>

                    <strong>
                      Amanya Godfrey
                    </strong>

                  </div>


                  {/* Number and copy button */}
                  <div className="number-row">

                    <div>

                      <span>
                        MTN NUMBER
                      </span>

                      <strong>
                        +250 756 523 276
                      </strong>

                    </div>


                    {/* Copy button */}
                    <button
                      type="button"
                      onClick={() =>
                        copyNumber(
                          "+250756523276",
                          "amanya"
                        )
                      }
                    >
                      {copied === "amanya"
                        ? "Copied ✓"
                        : "Copy"}
                    </button>

                  </div>

                </div>

              </>

            )}

          </div>

        </div>

      )}

    </section>

  );
}


export default Support;