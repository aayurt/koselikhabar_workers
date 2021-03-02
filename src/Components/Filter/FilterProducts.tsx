import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Select,
  Slider,
  TextField,
} from "@material-ui/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export default function FilterProducts() {
  const { register, handleSubmit, watch, errors, control } = useForm();
  const onSubmit = (data: any) => console.log("dataCHECK", data);
  const handleBlur = () => {
    // if (Name < 0) {
    //   setValue(0);
    // } else if (value > 100) {
    //   setValue(100);
    // }
  };
  const { category, subcategory, minSlider, maxSlider } = watch();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="filter">
        <div>
          <FormControl fullWidth className="search">
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
            />
          </FormControl>
          <FormControl className="filter-category">
            <InputLabel htmlFor="grouped-native-select-Category">
              Category
            </InputLabel>
            <Controller
              name="category"
              control={control}
              defaultValue=""
              ref={register}
              id="grouped-native-select-Category"
              as={
                <Select native>
                  <option aria-label="None" value="" />
                  <optgroup label="Category 1">
                    <option value={1}>Category 1</option>
                    <option value={2}>Category 2</option>
                  </optgroup>
                  <optgroup label="Category 2">
                    <option value={3}>Category 3</option>
                    <option value={4}>Category 4</option>
                  </optgroup>
                </Select>
              }
            />
          </FormControl>
          <FormControl variant="outlined" className="filter-category">
            <InputLabel htmlFor="grouped-native-select-SubCategory">
              Sub-Category
            </InputLabel>
            <Controller
              name="subcategory"
              control={control}
              defaultValue=""
              ref={register}
              id="grouped-native-select-SubCategory"
              as={
                <Select native>
                  <option aria-label="None" value="" />
                  <optgroup label="SubCategory 1">
                    <option value={1}>SubCategory 1</option>
                    <option value={2}>SubCategory 2</option>
                  </optgroup>
                  <optgroup label="SubCategory 2">
                    <option value={3}>SubCategory 3</option>
                    <option value={4}>SubCategory 4</option>
                  </optgroup>
                </Select>
              }
            />
          </FormControl>

          <FormControl className="filter-category">
            <InputLabel htmlFor="grouped-native-select-Rating">
              Rating
            </InputLabel>
            <Select
              onChange={(e) =>
                register({ name: "Rating", value: e.target.value })
              }
              native
              defaultValue=""
              id="grouped-native-select-Year"
            >
              <option aria-label="None" value="" />
              <optgroup label="Year 1">
                <option value={1}>Year 1</option>
                <option value={2}>Year 2</option>
              </optgroup>
              <optgroup label="Year 2">
                <option value={3}>Year 3</option>
                <option value={4}>Year 4</option>
              </optgroup>
            </Select>
          </FormControl>
          <FormControl className="filter-category">
            <InputLabel htmlFor="grouped-native-select-Year">Year</InputLabel>
            <Select
              onChange={(e) =>
                register({ name: "Year", value: e.target.value })
              }
              native
              defaultValue=""
              id="grouped-native-select-Year"
            >
              <option aria-label="None" value="" />
              <optgroup label="Year 1">
                <option value={1}>Year 1</option>
                <option value={2}>Year 2</option>
              </optgroup>
              <optgroup label="Year 2">
                <option value={3}>Year 3</option>
                <option value={4}>Year 4</option>
              </optgroup>
            </Select>
          </FormControl>
          <FormControl className="filter-category">
            <InputLabel htmlFor="grouped-native-select-min">Min:</InputLabel>
            <Controller
              name="minSlider"
              control={control}
              defaultValue={0}
              ref={register}
              id="grouped-native-select-min"
              render={(props) => (
                <>
                  <Slider
                    // value={typeof value === 'number' ? value : 0}
                    {...props}
                    onChange={(_, value) => {
                      console.log("value", value);
                      props.onChange(value);
                    }}
                    valueLabelDisplay="auto"
                    max={10}
                    step={1}
                  />
                  <Input
                    {...props}
                    margin="dense"
                    onChange={(e) => {
                      // var val = parseInt(e.target.value);
                      // if (val > 10) val = 10;
                      // if (val < 0) val = 0;
                      props.onChange(e.target.value);
                    }}
                    onBlur={handleBlur}
                    error={minSlider > 10 ? true : false}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 10,
                      type: "number",
                      "aria-labelledby": "input-slider",
                    }}
                  />
                </>
              )}
            />
          </FormControl>

          <FormControl className="filter-category">
            <InputLabel htmlFor="grouped-native-select-max">Max:</InputLabel>
            <Controller
              name="maxSlider"
              control={control}
              defaultValue={0}
              ref={register}
              id="grouped-native-select-max"
              render={(props) => (
                <>
                  <Slider
                    // value={typeof value === 'number' ? value : 0}
                    {...props}
                    onChange={(_, value) => {
                      props.onChange(value);
                    }}
                    valueLabelDisplay="auto"
                    max={10}
                    step={1}
                  />
                  <Input
                    {...props}
                    margin="dense"
                    onBlur={handleBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 10,
                      type: "number",
                      "aria-labelledby": "input-slider",
                    }}
                  />
                </>
              )}
            />
          </FormControl>
          <FormControl className="filter-category">
            <InputLabel htmlFor="grouped-native-select-orderBy">
              Order By:
            </InputLabel>
            <Select
              onChange={(e) =>
                register({ name: "orderBy", value: e.target.value })
              }
              native
              defaultValue=""
              id="grouped-native-select-orderBy"
            >
              <option aria-label="Latest" value="latest" selected>
                Latest
              </option>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl className="filter-category">
            <Button variant="contained" type="submit">
              Filter
            </Button>
          </FormControl>
        </div>
      </form>
    </>
  );
}
