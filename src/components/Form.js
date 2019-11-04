import React from "react";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

const Form = () => {
  return (
    <React.Fragment>
      <Container
        maxWidth="sm"
        style={{
          marginTop: "50px"
        }}
      >
        <Paper elevation={4}>
          <Grid container justify="center" alignItems="center" spacing={3}>
            <Grid item container xs={9} justify="center">
              <Grid item xs={10}>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel shrink htmlFor="component1">
                    タイトル
                  </InputLabel>
                  <OutlinedInput
                    id="component1"
                    placeholder="Placeholder"
                    style={{
                      marginTop: "12px"
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={10}>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel shrink htmlFor="component2">
                    著者
                  </InputLabel>
                  <OutlinedInput
                    id="component2"
                    placeholder="Placeholder"
                    style={{
                      marginTop: "12px"
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                type="submit"
                size="large"
                startIcon={<SearchIcon />}
              >
                検索
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default Form;
