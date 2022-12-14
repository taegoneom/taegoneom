import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { CustomOptions } from "./Orderdata";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup, { useRadioGroup } from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import VariantOverride from "@mui/joy/styles/ColorInversion";
import { IosShare, VideoCameraBack } from "@mui/icons-material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const { cshowtype, optioniced, optionhot, valueoflist, setvalueoflist } =
    CustomOptions();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  //////////////////////////////////////////////////////////////////////////////////////////?????????

  const handlecheck = (event) => {
    console.log("handler started. listing");
    console.log(event.currentTarget);
    console.log("title as id");
    console.log(event.currentTarget.title);
    var a = event.currentTarget.title; //ass index
    var b = event.currentTarget.name;
    var c = event.target.checked;
    var d = event.currentTarget.checked;
    var newArr = valueoflist;
    if (b == "pulp") {
      newArr[a].pulp = newArr[a].pulp === "0" ? "1" : "0";
    } else if (b == "soymilk") {
      newArr[a].soymilk = newArr[a].soymilk === "0" ? "1" : "0";
    } else if (b == "whippedcream") {
      newArr[a].whippedcream = newArr[a].whippedcream === "0" ? "1" : "0";
    } else if (b == "excludesyrup") {
      newArr[a].excludesyrup = newArr[a].excludesyrup === "0" ? "1" : "0";
    } else if (b == "excludetopping") {
      newArr[a].excludetopping = newArr[a].excludetopping === "0" ? "1" : "0";
    } else if (b == "includedalgona") {
      newArr[a].includedalgona = newArr[a].includedalgona === "0" ? "1" : "0";
    } else if (b == "addhazelnutsyrup") {
      newArr[a].addhazelnutsyrup =
        newArr[a].addhazelnutsyrup === "0" ? "1" : "0";
    } else if (b == "addcinnamonsyrup") {
      console.log("u selected cinnamon");
      newArr[a].addcinnamonsyrup = !newArr[a].addcinnamonsyrup;
    } else if (b == "changenormalintosignature") {
      newArr[a].changenormalintosignature =
        newArr[a].changenormalintosignature === "0" ? "1" : "0";
    } else if (b == "changebanaintosignature") {
      newArr[a].changebanaintosignature =
        newArr[a].changebanaintosignature === "0" ? "1" : "0";
    } else {
      console.log("why else? shit");
    }
    setvalueoflist(newArr);
    console.log("updated.".concat("", valueoflist));
    console.log(valueoflist[event.currentTarget.title]);
    console.log("updated. really.");
  };

  const handleradio = (event) => {
    console.log("handler started. listing id,name,value");
    console.log(event.currentTarget);
    console.log("title as id");
    console.log(event.currentTarget.title);
    var a = event.currentTarget.title;
    var b = event.currentTarget.name;
    var c = event.currentTarget.value;
    var newArr = valueoflist;
    if (b === "ice") {
      newArr[a].ice = c;
    } else if (b === "water") {
      newArr[a].water = c;
    } else if (b === "sweet") {
      newArr[a].sweet = c;
    } else if (b === "shotamount") {
      newArr[a].shotamount = c;
    } else if (b === "changelatteorsoyfromset") {
      newArr[a].changelatteorsoyfromset = c;
    } else if (b === "pulp") {
      newArr[a].pulp = c;
      console.log("pulp value");
      console.log(newArr[a].pulp);
    } else if (b === "soymilk") {
      newArr[a].soymilk = c;
    } else if (b === "whippedcream") {
      newArr[a].whippedcream = c;
    } else if (b === "excludesyrup") {
      newArr[a].excludesyrup = c;
    } else if (b === "excludetopping") {
      newArr[a].excludetopping = c;
    } else if (b === "includedalgona") {
      newArr[a].includedalgona = c;
    } else if (b === "addhazelnutsyrup") {
      newArr[a].addhazelnutsyrup = c;
    } else if (b === "addcinnamonsyrup") {
      newArr[a].addcinnamonsyrup = c;
    } else if (b === "changenormalintosignature") {
      newArr[a].changenormalintosignature = c;
    } else if (b === "changebanaintosignature") {
      newArr[a].changebanaintosignature = c;
    } else if (b === "changelatteorsoyfromset") {
      newArr[a].changelatteorsoyfromset = c;
    } else {
      console.log("why else? pulp?");
    }
    setvalueoflist(newArr);
    console.log("updated.".concat("", valueoflist));
    console.log(valueoflist[event.currentTarget.title]);
  };

  //hot,iced???????????????
  var showtype = cshowtype;
  var hot = optionhot;
  var iced = optioniced;
  var list = []; //
  var id = 0;

  var trash = {
    id: -999,
    ice: 0, //?????? 0 ????????????1 ????????????2 ????????????3
    water: 0, //??????0 ????????????1 ????????????2
    sweet: 0, //??????0 ?????????1 ????????????2
    shotamount: 0, //??????0 ????????? 1,(500???) ?????????2
    pulp: 0, //??????0,????????????1
    soymilk: 0, //?????? 0???????????????(????????????) 1
    whippedcream: 0, //????????????: ?????? 0 ????????????1 500???
    excludesyrup: 0, //??????0 ????????????1
    excludetopping: 0, //?????? 0 ????????????1
    includedalgona: 0, //?????? 0 ???????????????1(500???)
    addhazelnutsyrup: 0, //?????? 0 ????????????????????????1(500???)
    addcinnamonsyrup: 0, //?????? 0 ?????????????????????1(500???)
    changenormalintosignature: 0, //?????? 0 ????????????1(200)
    changebanaintosignature: 0, //?????? 0 ????????????1(???????????????400)
    changelatteorsoyfromset: 0, //?????? 0 ????????? ??????1(?????????800)????????? ??????2(?????????800)
  };

  //list??? ???????????????????
  if (showtype === 2) {
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"??????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 200?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????? ????????????"
                />
              </RadioGroup>
              <Typography>????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"????????? ??????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changelatteorsoyfromset"
                value={valueoflist[idxi].changelatteorsoyfromset}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????? ??????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????? ??????"
                />
              </RadioGroup>
              <Typography>????????? ????????? 800?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"??????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 200?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????? ????????????"
                />
              </RadioGroup>
              <Typography>????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"????????? ??????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changelatteorsoyfromset"
                value={valueoflist[idxi].changelatteorsoyfromset}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????? ??????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????? ??????"
                />
              </RadioGroup>
              <Typography>????????? ????????? 800?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 3) {
    //?????? ????????? ?????? ?????? ???????????????????????? ?????????????????????

    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"??????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????? ????????????"
                />
              </RadioGroup>
              <Typography>????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }

    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"??????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????? ????????????"
                />
              </RadioGroup>
              <Typography>????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 4) {
    //iced only??? ??????????????????
    //iced only ??????  ?????? ????????????(400???)
    //iced
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"??????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "?????????????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changebanaintosignature"
                value={valueoflist[idxi].changebanaintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 400?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 5) {
    //?????? ????????? ?????? ????????????(200???) ??????????????? ???????????????????????? ?????????????????????

    //hot
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 200?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????? ????????????"
                />
              </RadioGroup>
              <Typography>????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 200?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????? ????????????"
                />
              </RadioGroup>
              <Typography>????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 6) {
    //?????? ?????? ????????????(200???) ?????? ??????????????? ????????? ????????????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 200?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 200?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 7) {
    //iced only ?????? ?????? ???????????????????????? ?????????????????????

    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"??????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????? ????????????"
                />
              </RadioGroup>
              <Typography>????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 8) {
    //iced only ?????? ?????? ????????????(200???) ???????????? ???????????????????????? ?????????????????????
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 200?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????? ????????????"
                />
              </RadioGroup>
              <Typography>????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 9) {
    //iced only ?????? ??????????????? ????????????
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 11) {
    //?????? ?????? ????????? ?????? ????????????(200???) ??????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"??????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 200?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"??????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 200?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 12) {
    //?????? ?????? ???????????? ?????? ??????????????? ????????? ????????????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 200?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 200?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 13) {
    //?????? ????????? ?????? ?????? ???????????????????????? ?????????????????????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"??????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <br></br>
                <FormControl>
                  <FormLabel id={"radio".concat("", id)}>
                    "???????????? ????????????"
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby={"radio".concat("", id)}
                    name="addhazelnutsyrup"
                    value={valueoflist[idxi].addhazelnutsyrup}
                    onChange={handleradio}
                  >
                    <FormControlLabel
                      value="0"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="??????"
                    />
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="???????????? ????????????"
                    />
                  </RadioGroup>
                  <Typography>
                    ???????????? ??????????????? 500?????? ???????????????.
                  </Typography>
                </FormControl>

                <br></br>
                <FormControl>
                  <FormLabel id={"radio".concat("", id)}>
                    "????????? ????????????"
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby={"radio".concat("", id)}
                    name="addcinnamonsyrup"
                    value={valueoflist[idxi].addcinnamonsyrup}
                    onChange={handleradio}
                  >
                    <FormControlLabel
                      value="0"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="??????"
                    />
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="????????? ????????????"
                    />
                  </RadioGroup>
                  <Typography>????????? ??????????????? 500?????? ???????????????.</Typography>
                </FormControl>
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"??????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <br></br>
                <FormControl>
                  <FormLabel id={"radio".concat("", id)}>
                    "???????????? ????????????"
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby={"radio".concat("", id)}
                    name="addhazelnutsyrup"
                    value={valueoflist[idxi].addhazelnutsyrup}
                    onChange={handleradio}
                  >
                    <FormControlLabel
                      value="0"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="??????"
                    />
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="???????????? ????????????"
                    />
                  </RadioGroup>
                  <Typography>
                    ???????????? ??????????????? 500?????? ???????????????.
                  </Typography>
                </FormControl>

                <br></br>
                <FormControl>
                  <FormLabel id={"radio".concat("", id)}>
                    "????????? ????????????"
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby={"radio".concat("", id)}
                    name="addcinnamonsyrup"
                    value={valueoflist[idxi].addcinnamonsyrup}
                    onChange={handleradio}
                  >
                    <FormControlLabel
                      value="0"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="??????"
                    />
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="????????? ????????????"
                    />
                  </RadioGroup>
                  <Typography>????????? ??????????????? 500?????? ???????????????.</Typography>
                </FormControl>
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 14) {
    //iced only ?????? ?????? ???????????????????????? ?????????????????????
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"??????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "???????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????? ????????????"
                />
              </RadioGroup>
              <Typography>???????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "????????? ????????????"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????? ????????????"
                />
              </RadioGroup>
              <Typography>????????? ??????????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 15) {
    //iced only ?????? ??????????????? ????????????

    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 16) {
    //iced only ?????? ?????? ??????????????? ?????????

    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 17) {
    //?????? ???????????????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 18) {
    //?????? ?????? ??????????????? ????????? ???????????????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="includedalgona"
                value={valueoflist[idxi].includedalgona}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
              <Typography>????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="includedalgona"
                value={valueoflist[idxi].includedalgona}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
              <Typography>????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 19) {
    //iced only ?????? ?????? ??????????????? ?????????

    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 20) {
    //?????? ?????? ?????? ??????????????? ?????????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 21) {
    //?????? ?????? ?????? ??????????????? ????????? ????????????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
            //????????????
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="excludesyrup"
                value={valueoflist[idxi].excludesyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
            //????????????
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="excludesyrup"
                value={valueoflist[idxi].excludesyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 22) {
    //?????? ?????? ?????? ??????????????? ????????????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 23) {
    //iced only ??????

    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 24) {
    //???????????? ???????????????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            //????????? ??????(?????????)
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            //????????? ??????(?????????)
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 25) {
    //iced only ?????? ?????? ??????????????? ????????????

    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 26) {
    //???????????? ?????? ??????????????? ???????????? ????????? ????????????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="excludetopping"
                value={valueoflist[idxi].excludetopping}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="excludetopping"
                value={valueoflist[idxi].excludetopping}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 27) {
    //iced only
    //???????????????..
  } else if (showtype === 28) {
    //iced only ?????? ????????????

    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="excludesyrup"
                value={valueoflist[idxi].excludesyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 29) {
    //iced only ?????? ?????????

    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 30) {
    //iced only ?????? ??????????????? ?????????

    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
              <Typography>???????????? ????????? 500?????? ???????????????.</Typography>
            </FormControl>

            <FormControl>
              <FormLabel id={"radio".concat("", id)}>????????? ??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="???????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 31) {
    //???????????? ??????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 32) {
    //???????????? ??????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 33) {
    //iced only ?????? ??????

    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 34) {
    //???????????? ?????? ??????

    //hot ???
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 35) {
    //iced only ?????? ???????????? ?????????

    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"????????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="pulp"
                value={valueoflist[idxi].pulp}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>?????????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
              </RadioGroup>
              <Typography>???????????? 500?????? ???????????????.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 36) {
    //iced only ?????? ?????????

    //iced ?????????
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}??? ??????</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"?????????"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>??????</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="??????"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="?????????"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="????????????"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else {
  }

  return <div>{list}</div>;
}
