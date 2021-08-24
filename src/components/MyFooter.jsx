import React from "react"
import styled from "styled-components"
const MyFooter = () => {
return (
<div>
    <FooterContainer className="main-footer">
        <div className="footer-middle">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <h4>This is a footer</h4>
                  <ul className="list-unstyled">
                  <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    </ul>
                </div>

                <div className="col-md-3 col-sm-6">
                    <h4>This is a footer</h4>
                  <ul className="list-unstyled">
                  <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    </ul>
                </div>

                <div className="col-md-3 col-sm-6">
                    <h4>This is a footer</h4>
                  <ul className="list-unstyled">
                  <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    </ul>
                </div>

                <div className="col-md-3 col-sm-6">
                    <h4>This is a footer</h4>
                  <ul className="list-unstyled">
                  <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    </ul>
                </div>
                
            </div>
            <div className="Footer-bottom">
                <p className="text-xs-center">
                    extra info
                </p>
            </div>
        </div>
    </div>
    </FooterContainer>
</div>
)
}
export default MyFooter
const FooterContainer = styled.footer `
.footer-middle {
    background: var(--mainDark);
}
`