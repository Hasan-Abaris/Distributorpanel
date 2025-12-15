'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import { useParams, useRouter } from 'next/navigation'

// MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Styled Custom Components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  blockSize: 'auto',
  maxBlockSize: 680,
  maxInlineSize: '100%',
  margin: theme.spacing(12),
  [theme.breakpoints.down(1536)]: {
    maxBlockSize: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxBlockSize: 450
  }
}))

const MaskImg = styled('img')({
  blockSize: 'auto',
  maxBlockSize: 355,
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1
})

const Login = ({ mode }) => {
  // States
  const [mobile, setMobile] = useState('')
  const [error, setError] = useState('')
  const [showOtp, setShowOtp] = useState(false)
  const [otp, setOtp] = useState(['', '', '', ''])
  const [otpError, setOtpError] = useState('')

  // Vars
  const darkImg = '/images/pages/auth-mask-dark.png'
  const lightImg = '/images/pages/auth-mask-light.png'
  const darkIllustration = '/images/illustrations/auth/v2-login-dark.png'
  const lightIllustration = '/images/illustrations/auth/v2-login-light.png'
  const borderedDarkIllustration = '/images/illustrations/auth/v2-login-dark-border.png'
  const borderedLightIllustration = '/images/illustrations/auth/v2-login-light-border.png'

  // Hooks
  const router = useRouter()
  const { lang: locale } = useParams()
  const { settings } = useSettings()
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const characterIllustration = useImageVariant(
    mode,
    lightIllustration,
    darkIllustration,
    borderedLightIllustration,
    borderedDarkIllustration
  )
const handleOtpChange = (e, index) => {
  const value = e.target.value.replace(/\D/g, ''); // only digits
  const newOtp = [...otp];

  if (value === '') {
    // User pressed backspace or delete
    newOtp[index] = ''; // remove the digit
    setOtp(newOtp);

    // move to previous box if possible
    if (index > 0) {
      const prevInput = document.querySelector(`#otp_${index - 1}`);
      prevInput?.focus();
    }
    return;
  }

  // User typed a number
  newOtp[index] = value; // save number
  setOtp(newOtp);

  // move to next box
  if (index < 3) {
    const nextInput = document.querySelector(`#otp_${index + 1}`);
    nextInput?.focus();
  }
};


  // Verify OTP
  const verifyOtp = () => {
    const entered = otp.join('')

    if (entered !== '1234') {
      setOtpError('Invalid OTP. Try again.')
      return
    }

    // Redirect to KYC page
router.replace('/kyc')
  }

  return (
    <div className='flex bs-full justify-center'>
      
      {/* LEFT SIDE (unchanged) */}
      <div
        className={`flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden ${
          settings.skin === 'bordered' ? 'border-ie' : ''
        }`}
      >
        <LoginIllustration src={characterIllustration} alt='character-illustration' />
        {!hidden && <MaskImg alt='mask' src={authBackground} />}
      </div>

      {/* RIGHT SIDE (updated) */}
      <div className='flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]'>

     

        <div className='flex flex-col gap-6 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset] mbs-8 sm:mbs-11 md:mbs-0'>
          
          <div className='flex flex-col gap-1'>
            <Typography variant='h4'>{`Welcome to Distributor Panel 👋🏻`}</Typography>
            <Typography>Login using your mobile number</Typography>
          </div>

          

          {/* Input Mobile Number */}
          <CustomTextField
            fullWidth
            label='Mobile Number'
            placeholder='Enter mobile number'
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            type='tel'
            inputProps={{ maxLength: 10 }}
          />

          {/* Send OTP */}
          <Button
            fullWidth
            variant='contained'
            onClick={() => {
              if (mobile.length !== 10) {
                setError('Please enter a valid 10-digit mobile number.')
                return
              }
              setError('')
              setShowOtp(true)
            }}
          >
            Send OTP
          </Button>

          {error && <Alert severity='error'>{error}</Alert>}

          {/* OTP BOXES */}
          {showOtp && (
            <div className='flex flex-col gap-4 mt-4 p-4 border rounded-xl shadow-sm bg-background'>
              <Typography variant='h6'>Enter OTP</Typography>

              <div className='flex gap-3 justify-center'>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp_${index}`}
                    className='w-12 h-12 text-center text-xl border rounded-md focus:border-primary outline-none'
                    maxLength='1'
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                  />
                ))}
              </div>

              <Button fullWidth variant='contained' onClick={verifyOtp}>
                Verify OTP
              </Button>

              {otpError && <Typography color='error'>{otpError}</Typography>}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Login
