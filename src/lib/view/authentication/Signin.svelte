<script>
  import { goto } from "$app/navigation";
  import { createForm } from "svelte-forms-lib";
  import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    FormGroup,
    Input,
    Label,
    Alert,
    Row,
  } from "sveltestrap";
  import * as yup from "yup";
  import Checkbox from "../../components/checkbox/Checkbox.svelte";
  import { setItem } from "../../utility/localStorageController";
  import { onMount } from "svelte";

  // const apiHost = "https://tagstudioapi.codehub.codes";
  const apiHost = "http://localhost:3000";

  onMount(() => {
    $form.username = localStorage.getItem("username") || "";
  });

  let visible = true;
  let loader = false;

  const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const { form, errors, handleChange, handleSubmit } = createForm({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const { username, password } = values;

      const resposne = await fetch(`${apiHost}/auth/signIn`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!resposne.ok) {
        alert("아이디와 비밀번호가 맞지 않습니다.");
        return;
      }

      if (resposne.ok) {
        const result = await resposne.json();

        localStorage.setItem("username", username);
        localStorage.setItem("token", result.token);

        goto(`/dashboard`);
      }
    },
  });
  const handleCheckBox = () => {};
</script>

<div class="main-content">
  <div class="admin">
    <Container fluid>
      <Row class="justify-content-center">
        <Col xxl="3" md="6" sm="8">
          <div class="edit-profile">
            <Card class="border-0">
              <!-- {#if loader}
								<Spinner type="primary" size="md" />
							{/if} -->
              <CardHeader>
                <div class="edit-profile__title">
                  <h6>Tag Studio</h6>
                </div>
              </CardHeader>
              <CardBody>
                <form on:submit|preventDefault={handleSubmit}>
                  <div class="edit-profile__body">
                    <FormGroup class="form-group mb-25">
                      <Label for="username">아이디</Label>
                      <Input
                        on:change={handleChange}
                        bind:value={$form.username}
                        invalid={$errors.username.length > 0}
                        type="text"
                        class="form-control"
                        id="username"
                        name="username"
                        placeholder="아이디를 입력해 주세요"
                      />
                      {#if $errors.username}
                        <div class="invalid-feedback">{$errors.username}</div>
                      {/if}
                    </FormGroup>
                    <FormGroup class="form-group mb-15">
                      <Label for="password">비밀번호</Label>
                      <div class="position-relative">
                        <Input
                          on:change={handleChange}
                          bind:value={$form.password}
                          invalid={$errors.password.length > 0}
                          type="password"
                          class="form-control"
                          id="password"
                          name="password"
                          placeholder="비밀번호를 입력해 주세요"
                        />
                        {#if $errors.password}
                          <div class="invalid-feedback">{$errors.password}</div>
                        {/if}
                      </div>
                    </FormGroup>

                    <div
                      class="admin__button-group button-group d-flex pt-1 justify-content-md-start justify-content-center"
                    >
                      <Button
                        type="submit"
                        color="primary"
                        class="btn btn-primary btn-default w-100 btn-squared text-capitalize lh-normal px-50 signIn-createBtn "
                      >
                        {loader ? "Loading" : "로그인"}
                      </Button>
                    </div>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</div>

<style lang="scss">
  :global {
    @import "../../../../src/assets/sass/components/style.scss";
  }
</style>
