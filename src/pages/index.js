import React from "react";
import theme from "theme";
import { Theme, Image, Box, Link, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box>
			<Section
				height="100px"
				border-width="0 0 1px 0"
				border-style="solid"
				border-color="#0c6aff"
				background="#c6f5fe"
				display="flex"
				justify-content="space-between"
				width="100%"
				box-shadow="0 0 0 0 #c6f5fe"
				position="relative"
				font="16px --fontFamily-googleOpenSans"
			>
				<Override
					slot="SectionContent"
					margin="0px 1rem 0px 1rem"
					flex-direction="row"
					align-items="center"
					justify-content="space-between"
					width="100%"
					max-width="none"
				/>
				<Link
					href="/"
					color="#000000"
					width="max-content"
					height="max-content"
					display="flex"
					align-items="center"
					text-decoration-line="initial"
					border-width="0 0 1px 0"
					border-color="#494949"
					hover-border-style="none"
				>
					<Box
						width="max-content"
						cursor="pointer"
						background="#c6f5fe"
						sm-width="50px"
						sm-overflow="hidden"
					>
						<Image src="https://softr-prod.imgix.net/applications/d919d2ef-4bb1-4b91-aa55-6040ea8667e1/assets/f7a75f17-313d-4759-992f-e7d351a11836.svg" display="block" />
					</Box>
				</Link>
				<Text
					position="absolute"
					top="50%"
					left="50%"
					transform="translate(-50%, -82%)"
					font="--headline2"
					border-color="#000000"
					color="#525252"
					lg-font-size="2rem"
					sm-font-size="1.5rem"
					lg-right={0}
					lg-left="unset"
					lg-transform="translate(-10%, -82%)"
					sm-transform="translate(-10%, -100%)"
				>
					Geo Search App
				</Text>
			</Section>
			<Box padding="0" width="100vw" justify-content="space-between" font="16px --fontFamily-googleOpenSans">
				<Components.ReactiveBase
					padding="20px 20px 20px 20px"
					app="airbnb-dev"
					url="https://d711dccc0901:0795790c-6909-4926-8b87-6d52474bac3e@appbase-demo-ansible-abxiydt-arc.searchbase.io"
					enableAppbase
					mapKey="AIzaSyA9JzjtHeXg_C_hh_GdTBdLxREWdj3nsOU"
					themePreset="light"
					width="100%"
					height="100%"
					background="#c6f5fe"
				>
					<Box display="flex" justify-content="space-between" lg-flex-direction="column">
						<Box display="flex" flex-direction="column" min-width="300px" padding="1rem 0px 1rem 0px">
							<Components.MultiList
								componentId="citiesSensor"
								title="Filter by Cities "
								dataField="city.keyword"
								queryFormat="or"
								showCheckbox
								showCount
								showMissing
								showSearch
								showFilter
								margin="0px 0px 1rem 0px"
								sortBy="count"
								aggregationSize="8"
								size="5"
							/>
							<Components.GeoDistanceSlider
								title="Filter by Distance"
								componentId="distanceSensor"
								placeholder="Search Location"
								dataField="location"
								unit="mi"
								rangeLabelsStart="1 mi"
								rangeLabelsEnd="100 mi"
								rangeStart="1"
								rangeEnd="100"
								iconPosition="left"
								showIcon
								autoLocation
							/>
						</Box>
						<Box
							width="100%"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="flex-start"
							padding="0px 3rem 0px 3rem"
						>
							<Components.ReactiveGoogleMap
								componentId="mapComponent"
								dataField="location"
								defaultMapStyle="Light Monochrome"
								searchAsMove
								defaultZoom="3"
								width="100%"
								height="100%"
								max-height="100vh"
								size="1000"
								react={{
									"and": ["distanceSensor", "citiesSensor"]
								}}
								margin="0px 0rem 0px 0rem"
								padding="0px 0px 0px 0rem"
								showMapStyles
								showMarkerClusters
							/>
						</Box>
					</Box>
				</Components.ReactiveBase>
			</Box>
		</Box>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"61d5d704637b4d001f7bb576"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<script type={"text/javascript"} src={"https://maps.google.com/maps/api/js?key=AIzaSyA9JzjtHeXg_C_hh_GdTBdLxREWdj3nsOU&v=weekly&libraries=places"} place={"endOfHead"} rawKey={"61d861698410d2ff4422d52f"} />
		</RawHtml>
	</Theme>;
});