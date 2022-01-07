import React from "react";
import theme from "theme";
import { Theme } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"61d5d704637b4d001f7bb576"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<script type={"text/javascript"} src={"https://maps.google.com/maps/api/js?key=AIzaSyA9JzjtHeXg_C_hh_GdTBdLxREWdj3nsOU&v=weekly&libraries=places"} place={"endOfHead"} rawKey={"61d861698410d2ff4422d52f"} />
		</RawHtml>
	</Theme>;
});