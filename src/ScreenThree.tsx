import * as React from "react"
import styled from "styled-components"

const donationSites: Array<{ name: string; url: string }> = [
  {
    name: "The Bail Project",
    url: "https://bailproject.org/",
  },
  {
    name: "Black Lives Matter",
    url: "https://blacklivesmatter.com/",
  },
  {
    name: "Black Visions Collective",
    url: "https://www.blackvisionsmn.org/",
  },
  {
    name: "Minnesota Freedom Fund",
    url: "https://minnesotafreedomfund.org/",
  },
  {
    name: "Brookyln Bail Fund",
    url: "https://brooklynbailfund.org/",
  },
  {
    name: "NAACP Legal Defense Fund",
    url: "https://www.naacpldf.org/",
  },
  {
    name: "Communities United Against Police Brutality",
    url: "https://www.cuapb.org/",
  },
  {
    name: "ACLU",
    url: "https://www.aclu.org/issues/racial-justice",
  },
]

const DonationOption = (props: { name: string; url: string }) => {
  return (
    <DonationContainer>
      <DonationLink href={props.url} target="_blank">
        {props.name}
      </DonationLink>
    </DonationContainer>
  )
}

const ScreenThree = () => {
  return (
    <Container>
      <Content>
        <h1 style={{ fontSize: 52, fontWeight: 900 }}>Donate.</h1>
        <hr style={{ marginBottom: 50 }} />
        {donationSites.map((site) => (
          <DonationOption key={site.url} name={site.name} url={site.url} />
        ))}
      </Content>
    </Container>
  )
}

export default ScreenThree

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  box-sizing: border-box;
  padding: 30px;
  text-align: left;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  font-family: "PT Serif", serif;
`

const Content = styled.div.attrs({className: `animate__animated animate__fadeIn`})`
  width: 80%;
  max-width: 700px;
  animation-duration: 7s;
  animation-delay: 5s;
`

const DonationContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;
`

const DonationLink = styled.a`
  width: 100%;
  background: #001064;
  color: white;
  padding: 30px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 32px;
  border-radius: 10px;
  display: block;
`
